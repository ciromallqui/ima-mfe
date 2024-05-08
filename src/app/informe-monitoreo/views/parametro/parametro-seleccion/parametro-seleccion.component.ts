import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'parametro-seleccion',
  templateUrl: './parametro-seleccion.component.html',
  styleUrl: './parametro-seleccion.component.scss'
})
export class ParametroSeleccionComponent {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter();

  selectedFiles: any[] = [];

  onClickCancelar(){
    this.cerrar.emit(false);
  }

  selectNode(event: any) {
    console.log(event);
  }

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
  ]
  
}
