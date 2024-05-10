import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'punto-monitoreo-coordenada',
  templateUrl: './punto-monitoreo-coordenada.component.html',
  styleUrl: './punto-monitoreo-coordenada.component.scss'
})
export class PuntoMonitoreoCoordenadaComponent implements OnInit {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  infoPunto!: Message[];

  ngOnInit(){
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto/ Componente:', detail: "PUNTO 01" }];
  }

  onClickCancelar() {
    this.close.emit(false);
  }
}
