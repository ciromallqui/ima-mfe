import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'equipo-detalle',
  templateUrl: './equipo-monitoreo-detalle.component.html',
  styleUrl: './equipo-monitoreo-detalle.component.scss'
})
export class EquipoMonitoreoDetalleComponent {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();

  onClickCancelar(){
    this.cerrar.emit(false);
  }
}
