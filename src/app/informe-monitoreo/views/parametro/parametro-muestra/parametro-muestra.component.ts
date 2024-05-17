import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'parametro-muestra',
  templateUrl: './parametro-muestra.component.html',
  styleUrl: './parametro-muestra.component.scss'
})
export class ParametroMuestraComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  onClickCancelar() {
    this.close.emit(false);
  }
}
