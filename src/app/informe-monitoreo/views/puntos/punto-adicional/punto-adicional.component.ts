import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'punto-adicional',
  templateUrl: './punto-adicional.component.html',
  styleUrl: './punto-adicional.component.scss'
})
export class PuntoAdicionalComponent {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  infoPunto!: Message[];

  activeIndex: number = 0;

  constructor (){}

  ngOnInit(){

  }

  onClickCancelar() {
    this.close.emit(false);
  }

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
