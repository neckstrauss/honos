import {Component, Inject, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Model} from "../../model/repositories/repository.model";
import {MODES, SharedState, SHARED_STATE} from "../../model/sharedState.model";
import {HttpEventType} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;

@Component({
  selector: "modal-form-generico",
  moduleId: module.id,
  templateUrl: "modal-form-generico.component.html",
  styleUrls: ["modal-form-generico.component.scss"]
})
export class ModalFormGenericoComponent {

  lastId: number;
  editing: boolean = false;

  @Input('model') model: Model<any>;
  @Input('titulo') titulo: string = 'titulo por defecto';
  @Input('form') form: NgForm;
  @Input('tamanio') tamanio: string = '';
  @Input('validacion') valido: boolean = true;

  @Output("stateUpdate")
  newEvent = new EventEmitter<number>();

  locator = (p: any, id: number) => p.id == id;

  object: any = new Object();

  constructor( @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {

    stateEvents.subscribe((update) => {
      this.object = this.model.newObject();
      this.editing = update.mode == MODES.EDIT;
      if (update.id != undefined) {
        //Object.assign(this.object, this.model.get(update.id));
        this.getObjectById(update.id);
      }
      else {
        this.newEvent.emit(update.id);
      }


    });
  }

  cambiarObject(id: number) {
    if (id != undefined) {
      Object.assign(this.object, this.model.get(id));
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.save(this.object);
      form.reset();
      $("#modalForm").modal("hide");
      // this.model.loadDataSet();
    }
  }

  private getObjectById(id: number) {
    this.model.getById(id).subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.object = this.model.newObject();
        Object.assign(this.object, event.body);
        this.newEvent.emit(id);
      }
    });
  }

  messageClass(): string {
    return "modal-dialog " + this.tamanio;
  }

}

