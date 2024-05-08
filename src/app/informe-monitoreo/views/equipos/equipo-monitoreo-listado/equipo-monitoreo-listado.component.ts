import { Component, OnInit } from '@angular/core';
import { EquipoMonitoreo, EquipoParametroAsociadoMonitoreo } from '../model/EquipoMonitoreo';
import { EquipoMonitoreoService } from '../../../services/equipo-monitoreo.service';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'equipo',
  templateUrl: './equipo-monitoreo-listado.component.html',
  styleUrl: './equipo-monitoreo-listado.component.scss',
  providers: [ConfirmationService]
})
export class EquipoMonitoreoListadoComponent implements OnInit {
  /*Para abrir el dialogo de confirmacion*/
  openDialogConfirm: boolean = false;
  /*fin*/
  msgs: Message[] = [];
  /*VARIABLE PARA LA LISTAR TABLA DEL EQUIPO Y DEL PARAMETRO ASOCIADO AL EQUIPO*/
  first: number = 0;
  rows: number = 10;
  dataSource: EquipoMonitoreo[] = [];
  tableHeader: string[] = ["N°", "OPCIONES", "NOMBRE DE EQUIPO", "NRO SERIE", "MARCA", "MODELO", "FECHA DE CALIBRACIÓN VIGENTE", "NOMBRE ARCHIVO"];
  dataSourceParametro:EquipoParametroAsociadoMonitoreo[] = [];
  tableHeaderParametro:string[]=['N°','PUNTO','COMPONENTE AMBIENTAL/ PROCEDENCIA DE LA MUESTRA/ PROCEDENCIA ESPECÍFICA DE LA MUESTRA','PARÁMETROS'];
  /*FIN*/
  /*Diseño del dialogo */
  tituloHeaderDialogo: string = "";
  widthDialogo: string = '';
  heightDialogo: string = '';
  modalContent?:
    | ''
    | 'AGREGAR-EDITAR-EQUIPO'
    | 'ASOCIAR-PARAMETRO';
  /*Fin*/
  mostrarDetalle: boolean = false;
  activeIndex: number = 0;
  tabResul: string = "EQUIPO";
  constructor(private equipoMonitoreoService: EquipoMonitoreoService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.listadoEquipo();
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  /*para listar los equipos o lo parametros*/
  listadoEquipo() {
    this.equipoMonitoreoService.listaInforme().subscribe((r) => {
      this.dataSource = r;
    })
  }

  listadoEquipoAsociadoParametro(){
    this.equipoMonitoreoService.listaEquipoParametroAsociadoMonitoreo().subscribe((r) => {
      this.dataSourceParametro = r;
    })
  }
  /*fin*/



  onClickEquipos() {
    this.tabResul = "EQUIPO";
  }

  onClickParametros() {
    this.tabResul = "PARAMETRO";
    this.listadoEquipoAsociadoParametro();
  }

  /*Para abrir el registro y otras funciones*/

  onClickAgregarEquipo() {
    this.onclickAbrirDialogo('REGISTRO DE EQUIPO AMBIENTAL', '700px', '570px', 'AGREGAR-EDITAR-EQUIPO');

  }

  onClickEditarEquipo() {
    this.onclickAbrirDialogo('MODIFICAR EQUIPO AMBIENTAL', '700px', '570px', 'AGREGAR-EDITAR-EQUIPO');
  }

  onClickAsociarParametros() {
    this.onclickAbrirDialogo('ASOCIAR PARÁMETRO', '700px', 'auto', 'ASOCIAR-PARAMETRO');
  }

  onclickAbrirDialogo(
    tituloHeaderDialogo: string,
    widthDialogo: string,
    heightDialogo: string,
    modalContent: any,
    mostrarDetalle: boolean = true
  ) {
    this.tituloHeaderDialogo = tituloHeaderDialogo;
    this.widthDialogo = widthDialogo;
    this.heightDialogo = heightDialogo;
    this.modalContent = modalContent;
    this.mostrarDetalle = mostrarDetalle;
  }

  onClickCerrar(event: boolean) {
    this.mostrarDetalle = event;
  }
  /*fin*/
  /*Para el dialogo del eliminar*/
  confirm() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea eliminar el registro?',
      accept: () => {
        this.openDialogConfirm = false;
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'El equipo se eliminó correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }
  /*fin*/
}
