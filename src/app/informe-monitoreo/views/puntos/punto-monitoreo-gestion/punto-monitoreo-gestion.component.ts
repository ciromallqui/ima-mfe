import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'punto-monitoreo-gestion',
  templateUrl: './punto-monitoreo-gestion.component.html',
  styleUrl: './punto-monitoreo-gestion.component.scss'
})
export class PuntoMonitoreoGestionComponent {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  infoPunto!: Message[];
  activeIndex: number = 0;
  

  constructor (){}

  ngOnInit(){

  }

  onClickCancelar() {
    this.close.emit(false);
  }

  dataSource: any[] = [
    {nombrePunto: 'EF-01', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
    {nombrePunto: 'EF-02', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
    {nombrePunto: 'EF-03', fuentePunto: 'PUNTO DE IGA', componente: 'AGUA RESIDUAL'},
  ];
}
