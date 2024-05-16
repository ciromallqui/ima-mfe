import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';
import { DropdownList } from '../../informe/model/DropdownList';
import { PuntoResCoordenada } from '../model/PuntoResCoordenada';

@Component({
  selector: 'punto-monitoreo-coordenada',
  templateUrl: './punto-monitoreo-coordenada.component.html',
  styleUrl: './punto-monitoreo-coordenada.component.scss'
})
export class PuntoMonitoreoCoordenadaComponent implements OnInit {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  coordenada: PuntoResCoordenada = {};

  listaProyeccion!: DropdownList[];
  listaTipoUnidad!: DropdownList[];
  listaZona!: DropdownList[];
  listaDatum!: DropdownList[];

  infoPunto!: Message[];

  constructor(){
    this.listaProyeccion = [{id:'1', nombre: 'GEOGRAFICAS'},{id:'2', nombre: 'UTM'}];
    this.listaTipoUnidad = [{id:'1', nombre: 'GMS'},{id:'2', nombre: 'GRADOS DECIMALES'}];
    this.listaZona = [{id:'17', nombre: '17'},{id:'18', nombre: '18'}];
    this.listaDatum = [{id:'1', nombre: 'WGS84'}];
  }

  ngOnInit(){
    this.coordenada.idDatum = '1';
    this.coordenada.idProyeccion = '2';
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto/ Componente:', detail: "PUNTO 01" }];
  }

  onClickCancelar() {
    this.close.emit(false);
  }

  onChangeProyeccion() {
    this.coordenada.idTipoUnidad = '';
    this.coordenada.idZona = '';
  }
}
