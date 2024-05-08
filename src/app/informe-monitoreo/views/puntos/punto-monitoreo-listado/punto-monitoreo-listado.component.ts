import { Component, OnInit } from '@angular/core';
import { PuntoMonitoreo } from '../model/PuntoMonitoreo';
import { PuntoMonitoreoService } from '../../../services/punto-monitoreo.service';
import { MessageService } from 'primeng/api';

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

  onClickPunto() {

  }

  onSelected(event: any) {
    this.tabResul = event;
  }

  onClickPuntoAdicional() {

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
    // if(data != undefined) {
    //   this.dataPunto = data;
    //   this.tabResul = "PARAMETRO";
    // }else {
    // }
    this.messageWarn("No se ha detectado ningún componente seleccionado");
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'noPunto', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }
  
  tableHeader: string[] = ["N°","OPCIONES","NOMBRE DE PUNTO","FUENTE DE PUNTO","DESCRIPCIÓN","TIPO DE PUNTO","ESTE/LONGITUD","NORTE/LATITUD","ZONA","DATUM","PROYECCIÓN","REF. DE LOCALIZACIÓN","OBSERVACIÓN"];
}