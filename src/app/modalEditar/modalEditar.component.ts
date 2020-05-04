import { Component, OnInit } from '@angular/core';
import { Automovil } from './models';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modalEditar.component.html',
  styleUrls: ['./modalEditar.component.css']
})
export class ModalEditarComponent  {
  accion: string;
  auto: Automovil[];

  constructor(public activeModal: NgbActiveModal) { }

  


}
