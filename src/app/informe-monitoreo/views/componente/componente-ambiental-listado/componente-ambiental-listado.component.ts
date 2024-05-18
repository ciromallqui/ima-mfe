import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { TreeControlCheckbox } from '../../../../utils/TreeControlCheckbox';
import { PuntoMonitoreo } from '../../../model/punto/PuntoMonitoreo';
import { ComponenteAmbiental } from '../../../model/componente/ComponenteAmbiental';

@Component({
  selector: 'componente-ambiental-listado',
  templateUrl: './componente-ambiental-listado.component.html',
  styleUrl: './componente-ambiental-listado.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class ComponenteAmbientalListadoComponent implements OnInit {
  faTrash = faTrashAlt;
  @Input() data!: PuntoMonitoreo;
  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];

  dataSource: any[] = [{orden: 1,nombreComponente:'AIRE//AIRE AMBIENTAL'}, {orden: 2, nombreComponente:'aire 2'}, {orden: 3, nombreComponente:'AGUA'}];
  dataComponente!: ComponenteAmbiental;

  tabResul: string = "COMPONENTE";
  busqueda: boolean = false;
  mostrarDetalle: boolean = false;
  openDlgEliminar: boolean = false;
  mostrarParamPostSelect: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ){  }

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto de monitoreo:', detail: this.data.nombrePunto +" ("+this.data.codigoPunto+")" }];
  }

  onClickParamAdicional() {
    this.mostrarDetalle = true;
  }

  onClickBusqueda() {
    if(this.busqueda)
      this.busqueda = false;
    else this.busqueda = true;
  }

  onSelected(event: string) {
    this.tabResul = event;
    if (event=="PUNTO") {this.select.emit("PUNTO");} //para mostrar puntos al seleccionar des de parámetro
  }

  onClickPuntoRes() {
    this.select.emit("PUNTO");
  }
  onClickComponenteRes()  {

  }
  onClickParametroRes(dataEvt: ComponenteAmbiental) {
    console.log(dataEvt);
    if(dataEvt != undefined) {
      this.dataComponente = dataEvt;
      this.dataComponente.idPunto = this.data.idPunto;
      this.dataComponente.nombrePunto = this.data.nombrePunto;
      this.tabResul = "PARAMETRO";
    }else {
      this.messageWarn("No se ha detectado ningún componente seleccionado");
    }
  }

  onChangeCheckParam(datos: any) {
    new TreeControlCheckbox().changeCheckbox(datos);
  }

  selectNodeComp(node: any) {
    this.mostrarParamPostSelect = true;
  }

  //PARAMETRO
  nodeCheckedParam(event: any) {

  }

  onClickCerrar() {
    this.mostrarDetalle = false;
  }

  onClickEliminar(data: ComponenteAmbiental) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea eliminar el registro?',
      accept: () => {
        this.openDlgEliminar = false;
        this.messageService.add({ key: 'noComp', severity: 'success', summary: 'Confirmado', detail: 'El componente se eliminó correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDlgEliminar = false;
      }
    });
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'noComp', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }

  parametroAdiLista: any[] = [
    {
      idParametro: 1,
      idParametroPadre: 0,
      parametro: "PARÁMETROS CON NORMA",
      checked: false,
      showCheckbox: false,
      data: "Documents Folder",
      children: [{
        idParametro: 2,
        idParametroPadre: 1,
        parametro: "D.S. N° 002-2013-MINAM",
        showCheckbox: false,
        checked: false,
        data: "Work Folder",
        children: [{idParametro: 3,idParametroPadre: 2, parametro: "Suelo Agrícola",showCheckbox: true,checked: false, "data": "Expenses Document"}, {idParametro: 4,idParametroPadre: 2, parametro: "Suelo residual",showCheckbox: true,checked: false, "data": "Resume Document"}]
      }]
    },
    {
      idParametro: 5,
      idParametroPadre: 0,
      parametro: "PARÁMETROS SIN NORMA",
      data: "Pictures Folder",
      checked: false,
      children: [{
        idParametro: 6,
        idParametroPadre: 5,
        parametro: "Parámetro de aire sin norma",
        data: "Pictures Folder",
        showCheckbox: true,
        checked: false,
        children: [
          {idParametro: 7,idParametroPadre: 6,checked: true,showCheckbox: true, parametro: "Aceites y grasas mg/kg", "data": "Barcelona Photo"},
          {idParametro: 18,idParametroPadre: 6,checked: false,showCheckbox: true, parametro: "Aceites y grasas %", "data": "PrimeFaces Logo"}]
      }]
    }
  ];

  componenteLista: any[] = [
    {
      idComponente: 1,
      componente: "AGUA",
      checked: true,
      showCheckbox: false,
      data: "Documents Folder",
      children: [{
        idComponente: 2,
        componente: "AGUA RESIDUAL",
        showCheckbox: true,
        data: "Work Folder",
        children: [{idComponente: 3, componente: "AGUA RESIDUAL INDUSTRIAL",showCheckbox: true, "data": "Expenses Document"}, {idComponente: 4, componente: "AGUA RESIDUAL MUNICIPAL",showCheckbox: true, "data": "Resume Document"}]
      }]
    },
    {
      idComponente: 5,
      componente: "AIRE",
      data: "Pictures Folder",
      children: [
        {idComponente: 6, componente: "AIRE AMBIENTAL", "data": "Barcelona Photo"},
        {idComponente: 7, componente: "EMISIONES ATMOSFÉRICAS", "data": "PrimeFaces Logo"}]
    },
    {
      idComponente: 8,
      componente: "SUELO",
      data: "Pictures Folder",
      children: [
        {idComponente: 9, componente: "SUELO - MATERIALES", "data": "Barcelona Photo"},
        {idComponente: 10, componente: "SUSTANCIA QUÍMICA", "data": "PrimeFaces Logo"}]
    }
  ];
}
