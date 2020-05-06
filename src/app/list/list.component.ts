import { Component, OnInit, NgModule } from '@angular/core';
import { Automovil } from './models';
import {NgbModule, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';

@NgModule({
  imports: [NgbModule],
})
export class YourAppModule {
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  page= 1;
  pageSize= 10;

  autos: Automovil[];
  autoSelect: Automovil;

  closeResult = '';

  displayProgressBar: boolean; 
  
  constructor(private modalService: NgbModal, private autosService: AutosService) {}

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.autosService.getAutos().subscribe((response)=>{
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1000)
    });
  }

  onSelect(autos: Automovil){
    this.autoSelect= autos;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      /*this.closeResult = `Closed with: ${result}`;*/
    }, (reason) => {
      /*this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;*/
    });
  }
/*
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  */
}