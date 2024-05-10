import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'parametro-seleccion',
  templateUrl: './parametro-seleccion.component.html',
  styleUrl: './parametro-seleccion.component.scss'
})
export class ParametroSeleccionComponent implements OnInit {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();

  selectedFiles: any[] = [];
  infoPunto!: Message[];
  activeIndex: number = 0;

  constructor(){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto:', detail: "PUNTO 01" }];
  }

  onClickCancelar(){
    this.cerrar.emit(false);
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
        showCheckbox: true,
        data: "Work Folder",
        children: [{idParametro: 1, parametro: "Horario diurno",showCheckbox: true, "data": "Expenses Document"}, {idParametro: 1, parametro: "Horario nocturno",showCheckbox: true, "data": "Resume Document"}]
      }]
    },
    {
      idParametro: 1,
      parametro: "UNE 22-381-93 Control de vibraciones",
      data: "Pictures Folder",
      children: [
        {idParametro: 1, parametro: "Tabla 1: Criterio de prevención de daños", "data": "Barcelona Photo"},
        {idParametro: 1, parametro: "Tabla 2: prueba de...", "data": "PrimeFaces Logo"}]
    }
  ];
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
}
