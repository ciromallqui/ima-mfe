import { Component, OnInit } from '@angular/core';
import { PuntoMonitoreo } from '../model/PuntoMonitoreo';
import { PuntoMonitoreoService } from '../../../services/punto-monitoreo.service';

@Component({
  selector: 'punto-monitoreo-listado',
  templateUrl: './punto-monitoreo-listado.component.html',
  styleUrl: './punto-monitoreo-listado.component.scss'
})
export class PuntoMonitoreoListadoComponent implements OnInit{

  first: number = 0;
  rows: number = 10;

  busqueda: boolean = false;
  tabResul: string = "PUNTO";

  puntoMonitoreo: PuntoMonitoreo | undefined;
  dataSource: PuntoMonitoreo[] = [];

  constructor(
    private puntoMonitoreoService: PuntoMonitoreoService
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

  onSelectPP(event: any) {
    this.tabResul = event;
  }

  onClickPuntoAdicional() {

  }

  onClickPuntoRes() {
    this.tabResul = "PUNTO";
  }
  onClickComponenteRes() {
    this.tabResul = "COMPONENTE";
  }
  onClickParametroRes() {
    this.tabResul = "PARAMETRO";
  }
  
  tableHeader: string[] = ["N°","OPCIONES","NOMBRE DE PUNTO","FUENTE DE PUNTO","DESCRIPCIÓN","TIPO DE PUNTO","ESTE/LONGITUD","NORTE/LATITUD","ZONA","DATUM","PROYECCIÓN","REF. DE LOCALIZACIÓN","OBSERVACIÓN"];
}