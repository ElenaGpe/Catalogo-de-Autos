import { Component, OnInit, NgModule } from '@angular/core';
import { Automovil } from './models';
import {NgbModule, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';
import { ModalEditAddComponent } from '../modalEditAdd/modalEditAdd.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  page: number;
  pageSize: number;
  autos: Automovil[];

  displayProgressBar: boolean; 

  constructor(private modalService: NgbModal, private autosService: AutosService) {}

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.pageSize= 10;
    this.page= +sessionStorage.getItem('currentPage');
    this.autosService.getAutos().subscribe((response)=>{
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1000)
    });
  }


  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalEditAddComponent, {centered:true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autosService.updateAutos(auto).subscribe(value => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalEditAddComponent, {centered:true});
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto)=>{
        this.autosService.addAutos(auto).subscribe(value => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

  openModalEliminar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalEliminarComponent, {centered:true});
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(
      (autoTemp)=>{
        this.autosService.deleteAutos(autoTemp).subscribe(value => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

}