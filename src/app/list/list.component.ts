import { Component, OnInit, NgModule } from '@angular/core';
import { AUTOMOVILES } from './data';
import { Automovil } from './models';
import {NgbModule, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  autos: Automovil[];
  autoSelect: Automovil;

  closeResult = '';
  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.autos= AUTOMOVILES;
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

