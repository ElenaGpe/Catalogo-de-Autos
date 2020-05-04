import { Component, OnInit, NgModule } from '@angular/core';
import { Automovil } from './models';
import {NgbModule, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';
import { ModalEditarComponent } from '../modalEditar/modalEditar.component';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  page= 1;
  pageSize= 10;
  
  autos: Automovil[];
  
  constructor(private modalService: NgbModal, private autosService: AutosService) {}

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });
  }


  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalEditarComponent, {centered:true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAgregarComponent, {centered:true});
    modalRef.componentInstance.accion = 'Agregar';
  }

}