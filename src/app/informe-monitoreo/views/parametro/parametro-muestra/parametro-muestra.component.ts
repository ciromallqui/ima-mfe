import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'parametro-muestra',
  templateUrl: './parametro-muestra.component.html',
  styleUrl: './parametro-muestra.component.scss'
})
export class ParametroMuestraComponent {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();

  onClickCancelar() {
    this.cerrar.emit(false);
  }
}
