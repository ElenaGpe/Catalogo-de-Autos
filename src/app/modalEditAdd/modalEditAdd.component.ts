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

  constructor(public activeModal: NgbActiveModal) { }

  accion: string;
  auto: Automovil = {} as Automovil;

  desde: number = 2018;
  hasta: number = 2020;

  options: Options = {
    floor: 2000,
    ceil: 2020,
    step: 1,
    showTicks: true
  };

  private ensamblajeModelos(): number[]{
    let modelos: number[];
    modelos = [];
  
  for(let cont = this.desde; cont<= this.hasta; cont++){
    modelos.push(cont);
    }
    return modelos;
  }

  onSubmit(formAutos: any){
    let modelos: number[]= this.ensamblajeModelos();
    this.auto.modelos = modelos;
    this.activeModal.close(this.auto);
  }
}
