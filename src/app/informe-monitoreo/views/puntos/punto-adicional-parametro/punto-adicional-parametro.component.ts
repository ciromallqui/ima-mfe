import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { TreeControlCheckbox } from '../../../../utils/TreeControlCheckbox';

@Component({
  selector: 'punto-adicional-parametro',
  templateUrl: './punto-adicional-parametro.component.html',
  styleUrl: './punto-adicional-parametro.component.scss'
})
export class PuntoAdicionalParametroComponent implements OnInit {

  infoComponente!: Message[];

  ngOnInit(): void {
    this.infoComponente = [{ sticky: false, closable: false, severity: 'success', summary: 'Componente:', detail: 'AIRE AMBIENTAL' }];
  }

  onChangeCheckParam(datos: any) {
    new TreeControlCheckbox().changeCheckbox(datos);
  }

  parametroAdiLista: any[] = [
    {
      idParametro: 1,
      idParametroPadre: 0,
      parametro: "PARÁMETROS CON NORMA",
      checked: false,
      showCheckbox: false,
      expanded: true,
      data: "Documents Folder",
      children: [{
        idParametro: 2,
        idParametroPadre: 1,
        parametro: "D.S. N° 002-2013-MINAM",
        showCheckbox: false,
        checked: false,
        expanded: true,
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
      expanded: true,
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
