import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentoMonitoreoService {

  constructor( private http: HttpClient ) { }

  listaDocumentoMonitoreo() {
    return this.http.get<any>('assets/mock/documento.json');
  }
}