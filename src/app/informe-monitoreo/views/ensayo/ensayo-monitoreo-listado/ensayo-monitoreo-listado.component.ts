import { Component, OnInit } from '@angular/core';
import { EnsayoInformeMonitoreo, EnsayoInformeParametroAsociadoMonitoreo } from '../model/EnsayoInformeMonitoreo';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { EnsayoInformeMonitoreoService } from '../../../services/ensayo-informe-monitoreo.service';

@Component({
  selector: 'ensayo-monitoreo-listado',
  templateUrl: './ensayo-monitoreo-listado.component.html',
  styleUrl: './ensayo-monitoreo-listado.component.scss',
  providers: [ConfirmationService]
})
export class EnsayoMonitoreoListadoComponent implements OnInit {

  /*Para abrir el dialogo de confirmacion*/
  openDialogConfirm: boolean = false;
  /*fin*/
  /*VARIABLE PARA LA LISTAR TABLA DEL EQUIPO Y DEL PARAMETRO ASOCIADO AL EQUIPO*/
  first: number = 0;
  rows: number = 10;
  dataSource: EnsayoInformeMonitoreo[] = [];
  tableHeader: string[] = ["N°", "OPCIONES", "N° INFORME DE ENSAYO", "FECHA DE RECEPCIÓN DE LA MUESTRA", "FECHA DE EMISIÓN DEL INFORME DE ENSAYO", "RUC DE LABORATORIO", "NOMBRE DE LABORATORIO", "NOMBRE ARCHIVO"];
  dataSourceParametro: EnsayoInformeParametroAsociadoMonitoreo[] = [];
  tableHeaderParametro: string[] = ['N°', 'PUNTO', 'COMPONENTE AMBIENTAL/ PROCEDENCIA DE LA MUESTRA/ PROCEDENCIA ESPECÍFICA DE LA MUESTRA', 'PARÁMETROS','SIGNO','VALOR','U. MEDIDA'];
  /*FIN*/
  /*Diseño del dialogo */
  tituloHeaderDialogo: string = "";
  widthDialogo: string = '';
  heightDialogo: string = '';
  modalContent?:
    | ''
    | 'AGREGAR-EDITAR-ENSAYO'
    | 'ASOCIAR-PARAMETRO';
  /*Fin*/
  mostrarDetalle: boolean = false;
  activeIndex: number = 0;
  tabResul: string = "ENSAYO";
  constructor(private ensayoInformeMonitoreoService: EnsayoInformeMonitoreoService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.listadoEnsayoInforme();
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  /*para listar los equipos o lo parametros*/
  listadoEnsayoInforme() {
    this.ensayoInformeMonitoreoService.listaInforme().subscribe((r) => {
      this.dataSource = r;
    })
  }

  listadoEnsayoInformeAsociadoParametro() {
    this.ensayoInformeMonitoreoService.listaEquipoParametroAsociadoMonitoreo().subscribe((r) => {
      this.dataSourceParametro = r;
    })
  }
  /*fin*/



  onClickEnsayo() {
    this.tabResul = "ENSAYO";
  }

  onClickParametros() {
    this.tabResul = "PARAMETRO";
    this.listadoEnsayoInformeAsociadoParametro();
  }

  /*Para abrir el registro y otras funciones*/

  onClickAgregarEnsayo() {
    this.onclickAbrirDialogo('AGREGAR INFORME DE ENSAYO', '700px', '670px', 'AGREGAR-EDITAR-ENSAYO');

  }

  onClickEditarEnsayo() {
    this.onclickAbrirDialogo('MODIFICAR INFORME DE ENSAYO', '700px', '670px', 'AGREGAR-EDITAR-ENSAYO');
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
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'El informe de ensayo se eliminó correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDialogConfirm = false;
      }
    });
  }
  /*fin*/

}
