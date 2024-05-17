import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametroMonitoreoService {

  constructor( private http: HttpClient ) { }

  listarParametro() {
    return this.http.get<any>('assets/mock/parametro-monitoreo.json');
  }

  listarParametroEtapaFrecuencia() {
    return this.http.get<any>('assets/mock/etapa-frecuencia.json');
  }
}
