import { Component, EventEmitter, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'punto-monitoreo-foto',
  templateUrl: './punto-monitoreo-foto.component.html',
  styleUrl: './punto-monitoreo-foto.component.scss',
  providers: [MessageService]
})
export class PuntoMonitoreoFotoComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  infoPunto!: Message[];

  constructor (
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto/ Componente:', detail: "PUNTO 01" }];
  }

  onClickCancelar() {
    this.close.emit(false);
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Se subio el archivo correctamente.' });
  }
}
