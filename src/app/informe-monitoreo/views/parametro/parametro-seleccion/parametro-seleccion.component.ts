import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';
import { TreeControlCheckbox } from '../../../../utils/TreeControlCheckbox';

@Component({
  selector: 'parametro-seleccion',
  templateUrl: './parametro-seleccion.component.html',
  styleUrl: './parametro-seleccion.component.scss'
})
export class ParametroSeleccionComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  selectedFiles: any[] = [];
  infoPunto!: Message[];
  activeIndex: number = 0;

  constructor(){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto:', detail: "PUNTO 01" }];
  }

  onClickCancelar(){
    this.close.emit(false);
  }

  onChangeCheckParam(datos: any) {
    new TreeControlCheckbox().changeCheckbox(datos);
  }
  onChangeCheckParamAdi(datos: any) {
    new TreeControlCheckbox().changeCheckbox(datos);
  }

  selectNode(event: any) {
    console.log(event);
  }

  // LISTAS TEMP
  parametroLista: any[] = [
    {
      idParametro: 1,
      parametro: "D.S. N° 085-2003-PCM",
      checked: true,
      showCheckbox: false,
      data: "Documents Folder",
      children: [{
        idParametro: 1,
        parametro: "Zona comercial",
        checked: false,
        showCheckbox: true,
        data: "Work Folder",
        children: [{idParametro: 1, parametro: "Horario diurno",checked: false,showCheckbox: true, "data": "Expenses Document"}, {idParametro: 1, parametro: "Horario nocturno",checked: false,showCheckbox: true, "data": "Resume Document"}]
      }]
    },
    {
      idParametro: 1,
      parametro: "UNE 22-381-93 Control de vibraciones",
      data: "Pictures Folder",
      checked: false,
      showCheckbox: false,
      children: [
        {idParametro: 1,checked: false, showCheckbox: true, parametro: "Tabla 1: Criterio de prevención de daños", "data": "Barcelona Photo"},
        {idParametro: 1,checked: false, showCheckbox: true, parametro: "Tabla 2: prueba de...", "data": "PrimeFaces Logo"}]
    }
  ];
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
}
