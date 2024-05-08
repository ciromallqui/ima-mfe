import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EquipoComponenteMonitoreo, EquipoParametroMonitoreo, EquipoPuntoMonitoreo } from '../model/EquipoMonitoreo';
import { EquipoMonitoreoService } from '../../../services/equipo-monitoreo.service';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'equipo-asociar-parametro',
  templateUrl: './equipo-asociar-parametro-monitoreo.component.html',
  styleUrl: './equipo-asociar-parametro-monitoreo.component.scss',
  providers: [ConfirmationService]
})
export class EquipoAsociarParametroMonitoreoComponent implements OnInit {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();
  openDialogConfirm:boolean = false;
  dataSourcePunto: EquipoPuntoMonitoreo[] = [];
  dataSourceComponente: EquipoComponenteMonitoreo[] = [];
  dataSourceParametro: EquipoParametroMonitoreo[] = [];
  first: number = 0;
  rows: number = 5;
  resActivePunto: boolean = true;
  resActiveComponente: boolean = false;
  resActiveParametro: boolean = false;
  tabResul: string = "PUNTO";
  tableHeaderPunto: string[] = ['N°', 'Opciones', 'Nombre Punto'];
  tableHeaderComponente: string[] = ['N°', 'Opciones', '*COMPONENTE AMBIENTAL/ PROCEDENCIA DE LA MUESTRA/ PROCEDENCIA ESPECÍFICA DE LA MUESTRA'];
  tableHeaderParametro: string[] = ['N°', 'Opciones', 'Parámetro', 'Muestreo Inicial'];
  constructor(private equipoMonitoreoService: EquipoMonitoreoService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.onClikPunto();
  }

  onClickCancelar() {
    this.resActivePunto = true;
    this.resActiveComponente = false;
    this.resActiveParametro = false;
    this.tabResul = 'PUNTO';
    this.cerrar.emit(false);
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  /*Para listar los puntos, componentes y parametros*/
  onClikPunto() {
    this.resActivePunto = true;
    this.resActiveComponente = false;
    this.resActiveParametro = false;
    this.tabResul = 'PUNTO';
    this.equipoMonitoreoService.listarEquipoPuntoMonitoreo().subscribe((r) => {
      this.dataSourcePunto = r;
    })

  }

  onClickComponente() {
    this.resActivePunto = false;
    this.resActiveComponente = true;
    this.resActiveParametro = false;
    this.tabResul = 'COMPONENTE';
    this.equipoMonitoreoService.listarEquipoComponenteMonitoreo().subscribe((r) => {
      this.dataSourceComponente = r;
    })
  }

  onClickParametros() {
    this.resActivePunto = false;
    this.resActiveComponente = false;
    this.resActiveParametro = true;
    this.tabResul = 'PARAMETRO';
    this.equipoMonitoreoService.listarEquipoParametroMonitoreo().subscribe((r) => {
      this.dataSourceParametro = r;
    })
  }

  onClickAsociarComponentesEquipo() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea, seleccionar todos los componentes ambientales del punto, AIR-01?',
      accept: () => {
        this.openDialogConfirm = false;
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Todos los parámetros del componente se asocio al equipo correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }

  onClickEliminarComponentesEquipo() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea, quitar todos los parametros del componente ambiental, AGUA?',
      accept: () => {
        this.openDialogConfirm = false;
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Todos los parámetros del componente se elimino del equipo correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }

  onClickAsociarParametrosEquipo() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea, seleccionar todos los parametros del componente ambiental, AGUA?',
      accept: () => {
        this.openDialogConfirm = false;
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Todos los parámetros se asociarón al equipo correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }

  onClickEliminarParametrosEquipo() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea, quitar todos los parametros del componente ambiental, AGUA?',
      accept: () => {
        this.openDialogConfirm = false;
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Todos los parámetros se elimino del equipo correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }

  onChangeParametroEquipo(event:any){
    if(event.checked){
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Parámetro añadido al equipo correctamente.', life: 3000 });
    }else{
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Parámetro eliminado del equipo correctamente.', life: 3000 });
    }
  }
  /*fin*/
}
