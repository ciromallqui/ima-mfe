import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Message, MessageService } from 'primeng/api';
import { PuntoMonitoreo } from '../../puntos/model/PuntoMonitoreo';
import { ComponenteAmbiental } from '../model/ComponenteAmbiental';

@Component({
  selector: 'componente-ambiental-listado',
  templateUrl: './componente-ambiental-listado.component.html',
  styleUrl: './componente-ambiental-listado.component.scss',
  providers: [MessageService]
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
  mostrarParamPostSelect: boolean = false;

  constructor(
    private messageService: MessageService
  ){}

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

  selectNodeComp(node: any) {
    this.mostrarParamPostSelect = true;
    // var miElto = document.getElementsByClassName("p-checkbox-box")[0];
    // miElto.className = "verde";
    // var miElto1 = document.getElementsByClassName("p-checkbox")[0];
    // miElto1.className = "verde";
  }

  onClickCerrar() {
    this.mostrarDetalle = false;
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'noComp', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }

  parametroAdiLista: any[] = [
    {
      idParametro: 1,
      parametro: "PARÁMETROS CON NORMA",
      checked: true,
      showCheckbox: false,
      data: "Documents Folder",
      children: [{
        idParametro: 1,
        parametro: "D.S. N° 002-2013-MINAM",
        showCheckbox: true,
        data: "Work Folder",
        children: [{idParametro: 1, parametro: "Suelo Agrícola",showCheckbox: true, "data": "Expenses Document"}, {idParametro: 1, parametro: "Suelo residual",showCheckbox: true, "data": "Resume Document"}]
      }]
    },
    {
      idParametro: 1,
      parametro: "PARÁMETROS SIN NORMA",
      data: "Pictures Folder",
      children: [{
        idParametro: 1,
        parametro: "Parámetro de aire sin norma",
        data: "Pictures Folder",
        children: [
          {idParametro: 1, parametro: "Aceites y grasas mg/kg", "data": "Barcelona Photo"},
          {idParametro: 1, parametro: "Aceites y grasas %", "data": "PrimeFaces Logo"}]
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
