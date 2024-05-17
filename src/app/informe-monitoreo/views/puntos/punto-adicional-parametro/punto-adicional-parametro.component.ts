import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { TreeControlCheckbox } from '../../../../utils/TreeControlCheckbox';

@Component({
  selector: 'punto-adicional-parametro',
  templateUrl: './punto-adicional-parametro.component.html',
  styleUrl: './punto-adicional-parametro.component.scss'
})
export class PuntoAdicionalParametroComponent implements OnInit {

  @Input() opcion: string;

  first:number=0;
  rows:number=10;
  
  valorTemp: boolean = true;
  infoComponente!: Message[];

  ngOnInit(): void {
    this.infoComponente = [{ sticky: false, closable: false, severity: 'success', summary: 'Componente:', detail: 'AGUA' }];
  }

  onChangeCheckParam(datos: any) {
    new TreeControlCheckbox().changeCheckbox(datos);
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  dataSource: any[] = [
    {componente: 'AGUA', parametro: 'Cianuro (<= 1 mg/L)'},
    {componente: 'AGUA', parametro: 'Nitrógeno amoniacal (<= 80 mg/L)'}
  ];

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
        children: [{idParametro: 3,idParametroPadre: 2, parametro: "Cianuro (<= 1 mg/L)",showCheckbox: true,checked: false, "data": "Expenses Document"}, {idParametro: 4,idParametroPadre: 2, parametro: "Nitrógeno amoniacal (<= 80 mg/L)",showCheckbox: true,checked: false, "data": "Resume Document"}]
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
          {idParametro: 7,idParametroPadre: 6,checked: false,showCheckbox: true, parametro: "Aceites y grasas mg/kg", "data": "Barcelona Photo"},
          {idParametro: 18,idParametroPadre: 6,checked: false,showCheckbox: true, parametro: "Aceites y grasas %", "data": "PrimeFaces Logo"}]
      }]
    }
  ];

}
