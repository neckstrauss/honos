import {Component, Inject, ViewChild, Input} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Product} from "../../model/entities/product.model";
import {ProductoModel} from '../../model/repositories/producto.repository.model';
import {Model} from "../../model/repositories/repository.model";
import {MODES, SharedState, SHARED_STATE} from "../../model/sharedState.model";
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
object: any = new Object();

  lastId: number;
  editing: boolean = false;
  
  @Input('model') model: Model<any>;
  @Input('titulo') titulo: string = 'titulo por defecto';
  

  constructor(@Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.object = new Object();

      if (update.id != undefined) {
        Object.assign(this.object, this.model.get(update.id));
      } 
//      else {
//        this.form.reset();
//      }

      this.editing = update.mode == MODES.EDIT;
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
    }
  }

  

  
}

