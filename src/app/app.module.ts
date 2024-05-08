import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesModule } from 'primeng/messages';
import { TreeModule } from 'primeng/tree';
import { CheckboxModule } from 'primeng/checkbox';


import { InformeMonitoreoListadoComponent } from './informe-monitoreo/views/informe/informe-monitoreo-listado/informe-monitoreo-listado.component';
import { InformeMonitoreoDetalleComponent } from './informe-monitoreo/views/informe/informe-monitoreo-detalle/informe-monitoreo-detalle.component';
import { PuntoMonitoreoListadoComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-listado/punto-monitoreo-listado.component';
import { ResultadoComponent } from './informe-monitoreo/views/puntos/resultado/resultado.component';
import { ComponenteAmbientalListadoComponent } from './informe-monitoreo/views/componente/componente-ambiental-listado/componente-ambiental-listado.component';
import { ParametroListadoComponent } from './informe-monitoreo/views/parametro/parametro-listado/parametro-listado.component';
import { ParametroSeleccionComponent } from './informe-monitoreo/views/parametro/parametro-seleccion/parametro-seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InformeMonitoreoListadoComponent,
    InformeMonitoreoDetalleComponent,
    PuntoMonitoreoListadoComponent,
    ResultadoComponent,
    ComponenteAmbientalListadoComponent,
    ParametroListadoComponent,
    ParametroSeleccionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    ButtonGroupModule,
    DropdownModule,
    PaginatorModule,
    FontAwesomeModule,
    ContextMenuModule,
    MultiSelectModule,
    CheckboxModule,
    MenuModule,
    TableModule,
    TooltipModule,
    ToastModule,
    DialogModule,
    MessagesModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
