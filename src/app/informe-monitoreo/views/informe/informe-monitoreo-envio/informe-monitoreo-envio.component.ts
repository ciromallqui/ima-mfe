import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'informe-monitoreo-envio',
  templateUrl: './informe-monitoreo-envio.component.html',
  styleUrl: './informe-monitoreo-envio.component.scss'
})
export class InformeMonitoreoEnvioComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  openDlgClausula: boolean = false;

  onClickCancelar(){
    this.close.emit(false);
  }

  onClickClausula() {
    this.openDlgClausula = true;
  }

  dataSource: any = [
    {orden: 1, archivo: 'prueba 01.pdf', tipo: 'PRINCIPAL'},
    {orden: 2, archivo: 'prueba 02.pdf', tipo: 'ANEXO'},
    {orden: 3, archivo: 'prueba 03.pdf', tipo: 'ANEXO'},
  ];
}
