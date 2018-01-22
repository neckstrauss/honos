import { Model } from "../../model/repositories/repository.model";
import { SHARED_STATE, SharedState, MODES } from "../../model/sharedState.model";
import { ExcelService } from './excel.service';
import { Component, OnInit, Input, TemplateRef, ContentChild, Inject } from '@angular/core';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'tabla-generica',
  styleUrls: ['./tabla-generica.component.scss'],
  templateUrl: './tabla-generica.component.html'
})
export class TablaGenericaComponent {

  @Input('titulo') titulo = 'defaultTitle';
  @Input('model') model: Model<any>;
  @Input('columnas') columnas: any[];

  @ContentChild(TemplateRef) public filaTmpl: TemplateRef<Element>;


  key: string = 'name'; //set default  
  reverse: boolean = false;

  public itemsPerPage = 15;
  public selectedPage = 1;
  
  public filter;
  public filter2;

  constructor( @Inject(SHARED_STATE) private observer: Observer<SharedState>, private excelService: ExcelService) { }

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(this.model.getDataSet(), 'Excel');
  }
    
  getItems(): any[] {
    return this.model.getDataSet();
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  changePageSize(newSize: number) {
    this.itemsPerPage = Number(newSize);
  }

  deleteItem(key: number) {
    this.model.delete(key);
  }

  editItem(key: number) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }
  createItem() {
    this.observer.next(new SharedState(MODES.CREATE));
  }

  actualizarItems() {
    this.model.loadDataSet();
  }

}