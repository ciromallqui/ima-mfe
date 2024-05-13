import { Component } from '@angular/core';

@Component({
  selector: 'punto-adicional-parametro',
  templateUrl: './punto-adicional-parametro.component.html',
  styleUrl: './punto-adicional-parametro.component.scss'
})
export class PuntoAdicionalParametroComponent {

  parametroAdiLista: any[] = [
    {
      idParametro: 1,
      parametro: "PARÁMETROS CON NORMA",
      checked: true,
      showCheckbox: false,
      expanded: true,
      data: "Documents Folder",
      children: [{
        idParametro: 1,
        parametro: "D.S. N° 002-2013-MINAM",
        showCheckbox: true,
        expanded: true,
        data: "Work Folder",
        children: [{idParametro: 1, parametro: "Suelo Agrícola",showCheckbox: true, "data": "Expenses Document"}, {idParametro: 1, parametro: "Suelo residual",showCheckbox: true, "data": "Resume Document"}]
      }]
    },
    {
      idParametro: 1,
      parametro: "PARÁMETROS SIN NORMA",
      expanded: true,
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
