import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'parametro-muestra',
  templateUrl: './parametro-muestra.component.html',
  styleUrl: './parametro-muestra.component.scss'
})
export class ParametroMuestraComponent implements OnInit{
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  infoParametro!: Message[];
  date3: Date | undefined;

  ngOnInit(): void {
    this.infoParametro = [{ sticky: false, closable: false, severity: 'success', summary: 'Parámetro:', detail: 'Aceytes y grasas (<=100 mg/L)' }];
  }

  onClickCancelar() {
    this.close.emit(false);
  }
}
