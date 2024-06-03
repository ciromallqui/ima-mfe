import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { SkeletonModule } from 'primeng/skeleton';

import { InformeMonitoreoListadoComponent } from './informe-monitoreo/views/informe/informe-monitoreo-listado/informe-monitoreo-listado.component';
import { InformeMonitoreoDetalleComponent } from './informe-monitoreo/views/informe/informe-monitoreo-detalle/informe-monitoreo-detalle.component';
import { PuntoMonitoreoListadoComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-listado/punto-monitoreo-listado.component';
import { ResultadoComponent } from './informe-monitoreo/views/puntos/resultado/resultado.component';
import { ComponenteAmbientalListadoComponent } from './informe-monitoreo/views/componente/componente-ambiental-listado/componente-ambiental-listado.component';
import { EquipoMonitoreoListadoComponent } from './informe-monitoreo/views/equipos/equipo-monitoreo-listado/equipo-monitoreo-listado.component';
import { EquipoMonitoreoDetalleComponent } from './informe-monitoreo/views/equipos/equipo-monitoreo-detalle/equipo-monitoreo-detalle.component';
import { EnsayoMonitoreoDetalleComponent } from './informe-monitoreo/views/ensayo/ensayo-monitoreo-detalle/ensayo-monitoreo-detalle.component';
import { EnsayoMonitoreoListadoComponent } from './informe-monitoreo/views/ensayo/ensayo-monitoreo-listado/ensayo-monitoreo-listado.component';
import { DocumentoMonitoreoListadoComponent } from './informe-monitoreo/views/documento/documento-monitoreo-listado/documento-monitoreo-listado.component';
import { DocumentoMonitoreoDetalleComponent } from './informe-monitoreo/views/documento/documento-monitoreo-detalle/documento-monitoreo-detalle.component';
import { EquipoAsociarParametroMonitoreoComponent } from './informe-monitoreo/views/equipos/equipo-asociar-parametro-monitoreo/equipo-asociar-parametro-monitoreo.component';
import { EnsayoAsociarParametroMonitoreoComponent } from './informe-monitoreo/views/ensayo/ensayo-asociar-parametro-monitoreo/ensayo-asociar-parametro-monitoreo.component';
import { ParametroListadoComponent } from './informe-monitoreo/views/parametro/parametro-listado/parametro-listado.component';
import { ParametroSeleccionComponent } from './informe-monitoreo/views/parametro/parametro-seleccion/parametro-seleccion.component';
import { PuntoMonitoreoFotoComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-foto/punto-monitoreo-foto.component';
import { PuntoMonitoreoObservacionComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-observacion/punto-monitoreo-observacion.component';
import { PuntoAdicionalComponent } from './informe-monitoreo/views/puntos/punto-adicional/punto-adicional.component';
import { PuntoMonitoreoGestionComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-gestion/punto-monitoreo-gestion.component';
import { PuntoMonitoreoCoordenadaComponent } from './informe-monitoreo/views/puntos/punto-monitoreo-coordenada/punto-monitoreo-coordenada.component';
import { PuntoAdicionalComponenteComponent } from './informe-monitoreo/views/puntos/punto-adicional-componente/punto-adicional-componente.component';
import { PuntoAdicionalParametroComponent } from './informe-monitoreo/views/puntos/punto-adicional-parametro/punto-adicional-parametro.component';
import { InformeMonitoreoEnvioComponent } from './informe-monitoreo/views/informe/informe-monitoreo-envio/informe-monitoreo-envio.component';
import { ParametroMuestraComponent } from './informe-monitoreo/views/parametro/parametro-muestra/parametro-muestra.component';
import { ParametroEtapaFrecuenciaComponent } from './informe-monitoreo/views/parametro/parametro-etapa-frecuencia/parametro-etapa-frecuencia.component';


@NgModule({
  declarations: [
    AppComponent,
    InformeMonitoreoListadoComponent,
    InformeMonitoreoDetalleComponent,
    PuntoMonitoreoListadoComponent,
    ResultadoComponent,
    ComponenteAmbientalListadoComponent,
    EquipoMonitoreoListadoComponent,
    EquipoMonitoreoDetalleComponent,
    EnsayoMonitoreoDetalleComponent,
    EnsayoMonitoreoListadoComponent,
    DocumentoMonitoreoListadoComponent,
    DocumentoMonitoreoDetalleComponent,
    EquipoAsociarParametroMonitoreoComponent,
    EnsayoAsociarParametroMonitoreoComponent,
    ParametroListadoComponent,
    ParametroSeleccionComponent,
    PuntoMonitoreoFotoComponent,
    PuntoMonitoreoObservacionComponent,
    PuntoAdicionalComponent,
    PuntoMonitoreoGestionComponent,
    PuntoMonitoreoCoordenadaComponent,
    PuntoAdicionalComponenteComponent,
    PuntoAdicionalParametroComponent,
    InformeMonitoreoEnvioComponent,
    ParametroMuestraComponent,
    ParametroEtapaFrecuenciaComponent
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
    CalendarModule,
    ConfirmDialogModule,
    CheckboxModule,
    FileUploadModule,
    TreeModule,
    ImageModule,
    CardModule,
    SkeletonModule,
    InputSwitchModule,
    FloatLabelModule,
    InputNumberModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
