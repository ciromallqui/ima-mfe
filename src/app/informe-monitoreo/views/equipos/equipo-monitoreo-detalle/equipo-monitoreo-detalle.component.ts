import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'equipo-detalle',
  templateUrl: './equipo-monitoreo-detalle.component.html',
  styleUrl: './equipo-monitoreo-detalle.component.scss'
})
export class EquipoMonitoreoDetalleComponent implements OnInit {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();
  formGroup:FormGroup;
  submite:boolean = false;
  constructor(private messageService: MessageService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombreEquipo:['',[Validators.required]],
      marcaEquipo:['',[Validators.required]],
      modeloEquipo:['',[Validators.required]],
      fechaCalibracionEquipo:['',[Validators.required]]
    });
  }

  get E(){
    return this.formGroup.controls;
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Se subio el archivo correctamente.' });
  }

  onClickCancelar() {
    this.cerrar.emit(false);
  }

  onClickGuardar(){
    if(this.formGroup.valid){

    }else{
      this.submite = true;
      setTimeout(() => {
        this.submite = false;
      }, 9000);
    }
    this.cerrar.emit(false);
  }
}
