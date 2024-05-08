import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'documento-monitoreo-detalle',
  templateUrl: './documento-monitoreo-detalle.component.html',
  styleUrl: './documento-monitoreo-detalle.component.scss'
})
export class DocumentoMonitoreoDetalleComponent implements OnInit{

  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Se subio el archivo correctamente.' });
  }
  
  onClickCancelar(){
    this.cerrar.emit(false);
  }


}
