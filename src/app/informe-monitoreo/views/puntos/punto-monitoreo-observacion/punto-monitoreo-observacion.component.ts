import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'punto-monitoreo-observacion',
  templateUrl: './punto-monitoreo-observacion.component.html',
  styleUrl: './punto-monitoreo-observacion.component.scss'
})
export class PuntoMonitoreoObservacionComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  infoPunto!: Message[];

  constructor (){}

  ngOnInit(){

  }

  onClickCancelar() {
    this.close.emit(false);
  }
}
