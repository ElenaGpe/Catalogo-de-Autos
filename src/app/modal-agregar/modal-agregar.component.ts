import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent{

  accion: string;

  constructor(public activeModal: NgbActiveModal) { }

}
