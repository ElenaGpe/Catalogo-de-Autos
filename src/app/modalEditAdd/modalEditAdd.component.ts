import { Component, OnInit } from '@angular/core';
import { Automovil } from './models';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-modal',
  templateUrl: './modalEditAdd.component.html',
  styleUrls: ['./modalEditAdd.component.css']
})

export class ModalEditAddComponent  {
  accion: string;
  auto: Automovil = {} as Automovil;

  value: number = 2010;
  highValue: number = 2020;
  options: Options = {
    floor: 2000,
    ceil: 2020,
  };

  constructor(public activeModal: NgbActiveModal) { }


}