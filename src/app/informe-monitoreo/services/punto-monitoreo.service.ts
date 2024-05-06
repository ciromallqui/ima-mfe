import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntoMonitoreoService {

  constructor( private http: HttpClient ) { }

  listaPunto() {
    return this.http.get<any>('assets/mock/punto.json');
  }
}
