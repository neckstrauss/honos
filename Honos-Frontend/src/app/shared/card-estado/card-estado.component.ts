import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-estado',
  templateUrl: './card-estado.component.html',
  styleUrls: ['./card-estado.component.css']
})
  
export class CardEstadoComponent  {

  @Input()color: string = '';
  @Input()icono: string = '';
  @Input()titulo: string = '';
  @Input()numero: string = '';
  

  constructor() { }
  
  getColor(){
    return this.color;
  }

  
}
