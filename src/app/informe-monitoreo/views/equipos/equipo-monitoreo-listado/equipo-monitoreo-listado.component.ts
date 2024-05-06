import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'equipo',
  templateUrl: './equipo-monitoreo-listado.component.html',
  styleUrl: './equipo-monitoreo-listado.component.scss',
})
export class EquipoMonitoreoListadoComponent implements OnInit {
  /*Diseño del dialogo */
  tituloHeaderDialogo:string="";
  widthDialogo:string = '';
  heightDialogo:string = '';
  modalContent?:
  | ''
  | 'AGREGAR-EQUIPO'
  | 'ASOCIAR-PARAMETRO';
  /*Fin*/
  mostrarDetalle: boolean = false;
  activeIndex: number = 0;
  tabResul: string = "EQUIPO";
  constructor() {}

  ngOnInit(): void {
  }


  onClickEquipos() {
    this.tabResul = "EQUIPO";
  }

  onClickParametros(){
    this.tabResul = "PARAMETRO";
  }

  onClickAgregarEquipo(){
    this.onclickAbrirDialogo('REGISTRO DE EQUIPO AMBIENTAL','700px','470px','AGREGAR-EQUIPO');

  }

  onclickAbrirDialogo(
    tituloHeaderDialogo:string,
    widthDialogo:string,
    heightDialogo:string,
    modalContent:any,
    mostrarDetalle:boolean = true
  ){
    this.tituloHeaderDialogo = tituloHeaderDialogo;
    this.widthDialogo = widthDialogo;
    this.heightDialogo = heightDialogo;
    this.modalContent = modalContent;
    this.mostrarDetalle = mostrarDetalle;
  }

  onClickCerrar(event: boolean) {
    this.mostrarDetalle = event;
  }
}
