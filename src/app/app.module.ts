import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalEditAddComponent } from './modalEditAdd/modalEditAdd.component';
import { FormsModule } from '@angular/forms';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormatoModelosPipe } from './formato-modelos.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogComponent } from './log/log.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalEditAddComponent,
    ModalEliminarComponent,
    FormatoModelosPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalEditAddComponent]
})
export class AppModule { }
