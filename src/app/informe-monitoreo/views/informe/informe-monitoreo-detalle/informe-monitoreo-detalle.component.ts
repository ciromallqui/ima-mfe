import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'informe-monitoreo-detalle',
  templateUrl: './informe-monitoreo-detalle.component.html',
  styleUrl: './informe-monitoreo-detalle.component.scss'
})
export class InformeMonitoreoDetalleComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  onClickCancelar(){
    this.close.emit(false);
  }

  ufi: any = [
    {name: 'Instrumento de gestión ambiental 1', code: 'NY'},
    {name: 'Instrumento de gestión ambiental 2', code: 'RM'},
    {name: 'Instrumento de gestión ambiental 3', code: 'LDN'},
    {name: 'Instrumento de gestión ambiental 4', code: 'IST'},
    {name: 'Instrumento de gestión ambiental 5', code: 'PRS'}
];
}
