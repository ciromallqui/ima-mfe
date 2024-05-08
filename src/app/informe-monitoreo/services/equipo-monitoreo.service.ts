import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoMonitoreoService {

  constructor( private http: HttpClient ) { }

  listaInforme() {
    return this.http.get<any>('assets/mock/equipo.json');
  }

  listaEquipoParametroAsociadoMonitoreo() {
    return this.http.get<any>('assets/mock/parametro-equipo-asociado.json');
  }

  listarEquipoPuntoMonitoreo(){
    return this.http.get<any>('assets/mock/punto-equipo.json');
  }

  listarEquipoComponenteMonitoreo(){
    return this.http.get<any>('assets/mock/componente-equipo.json');
  }

  listarEquipoParametroMonitoreo(){
    return this.http.get<any>('assets/mock/parametro-equipo.json');
  }
}