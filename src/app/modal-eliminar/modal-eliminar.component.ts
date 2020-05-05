import { Component, OnInit } from '@angular/core';
import { Automovil } from '../list/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})

export class ModalEliminarComponent implements OnInit {
auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
