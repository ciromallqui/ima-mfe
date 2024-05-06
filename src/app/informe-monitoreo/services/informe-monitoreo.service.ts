import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformeMonitoreoService {

  constructor( private http: HttpClient ) { }

  listaInforme() {
    return this.http.get<any>('assets/mock/informe.json');
  }
}
