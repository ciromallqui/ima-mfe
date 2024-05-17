import { Component, OnInit } from '@angular/core';
import { PuntoMonitoreoService } from '../../../services/punto-monitoreo.service';
import { MessageService } from 'primeng/api';
import { PuntoMonitoreo } from '../../../model/punto/PuntoMonitoreo';
import { ConfigDialog } from '../../../model/helper/ConfigDialog';

@Component({
  selector: 'punto-monitoreo-listado',
  templateUrl: './punto-monitoreo-listado.component.html',
  styleUrl: './punto-monitoreo-listado.component.scss',
  providers: [MessageService]
})
export class PuntoMonitoreoListadoComponent implements OnInit{

  first: number = 0;
  rows: number = 10;

  busqueda: boolean = false;
  tabResul: string = "PUNTO";

  puntoMonitoreo: PuntoMonitoreo | undefined;
  dataSource: PuntoMonitoreo[] = [];
  dataPunto!: PuntoMonitoreo;

  configDialog: ConfigDialog = {};

  constructor(
    private puntoMonitoreoService: PuntoMonitoreoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
      this.listado();
  }

  onPageChange(event: any){
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  onSelected(event: any) {
    this.tabResul = event;
  }

  listado(){
    this.puntoMonitoreoService.listaPunto().subscribe((res: any) =>{
      this.dataSource = res;
    });
  }

  onClickBusqueda() {
    if(this.busqueda)
      this.busqueda = false;
    else this.busqueda = true;
  }

  onClickDlgPGestion(data: PuntoMonitoreo) {
    this.onClickAbrirDialogo('SELECCIONAR PUNTOS DE MONITOREO','800px', null,'GESTION');
  }
  onClickDlgPAdicional(data: PuntoMonitoreo) {
    this.onClickAbrirDialogo('PUNTOS ADICIONALES','900px', null,'ADICIONAL');
  }
  onClickDlgCoordenada(data: PuntoMonitoreo) {
    this.onClickAbrirDialogo('COORDENADAS','800px', null,'COORDENADA');
  }
  onClickDlgFoto(data: PuntoMonitoreo) {
    this.onClickAbrirDialogo('AGREGAR FOTO Y/O VIDEO','600px', null,'FOTO');
  }
  onClickDlgObservacion(data: PuntoMonitoreo) {
    this.onClickAbrirDialogo('PUNTO: PUNTO 01','500px', null,'OBS');
  }

  onClickAbrirDialogo(titulo: string, width: string, height: string, opcion: string, mostrarDialog: boolean = true) {
    this.configDialog = {title: titulo, width: width, height: height, option: opcion, show: mostrarDialog};
  }
  onClickCerrarDialog(isShow: boolean) {
    this.configDialog.show = isShow;
  }

  onClickPuntoRes() {
    this.tabResul = "PUNTO";
  }
  onClickComponenteRes(data: PuntoMonitoreo) {
    console.log(data);
    if(data != undefined) {
      this.dataPunto = data;
      this.tabResul = "COMPONENTE";
    }else {
      this.messageWarn("No se ha detectado ningún punto seleccionado");
    }
  }
  onClickParametroRes(data: any) {
    this.messageWarn("No se ha detectado ningún componente seleccionado");
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'noPunto', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }
  
  tableHeader: string[] = ["N°","OPCIONES","NOMBRE DE PUNTO","FUENTE DE PUNTO","DESCRIPCIÓN","TIPO DE PUNTO","ESTE/LONGITUD","NORTE/LATITUD","ZONA","DATUM","PROYECCIÓN","REF. DE LOCALIZACIÓN","OBSERVACIÓN"];
}