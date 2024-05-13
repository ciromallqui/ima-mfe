import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from 'primeng/api';
import { InformeMonitoreo } from '../../informe/model/InformeMonitoreo';

@Component({
  selector: 'punto-monitoreo-gestion',
  templateUrl: './punto-monitoreo-gestion.component.html',
  styleUrl: './punto-monitoreo-gestion.component.scss'
})
export class PuntoMonitoreoGestionComponent {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  infoPunto!: Message[];

  dataInforme!: InformeMonitoreo;
  activeIndex: number = 0;
  tabSelect: string = "I";

  constructor (){}

  ngOnInit(){

  }

  onClickCancelar() {
    this.close.emit(false);
  }

  onClickInforme() {
    this.tabSelect = "I";
  }
  onClickPunto(data: any) {
    this.tabSelect = "P";
  }

  dataSourcePuntoIga: any[] = [
    {nombrePunto: 'EF-01', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
    {nombrePunto: 'EF-02', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
    {nombrePunto: 'EF-03', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
  ];
  dataSourceInforme: any[] = [
    {orden: '1', nombreInforme: 'INFORME 01', fechaRegistro: '08/05/2024'},
    {orden: '2', nombreInforme: 'INFORME 02', fechaRegistro: '09/05/2024'},
    {orden: '3', nombreInforme: 'INFORME 03', fechaRegistro: '10/05/2024'},
  ];
}
