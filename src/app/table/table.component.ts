import { Component, OnInit, NgModule } from '@angular/core';
import { AUTOMOVILES } from './data';
import { Automovil } from './models';
import {NgbModule, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  autos: Automovil[];
  constructor() { }

  ngOnInit(): void {
    this.autos= AUTOMOVILES;
  }

}