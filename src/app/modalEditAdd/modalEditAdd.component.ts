import { Component, OnInit } from '@angular/core';
import { Automovil } from './models';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modalEditAdd.component.html',
  styleUrls: ['./modalEditAdd.component.css']
})

export class ModalEditAddComponent  {
  accion: string;
  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  


}
