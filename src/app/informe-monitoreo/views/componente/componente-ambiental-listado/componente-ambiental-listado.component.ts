import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'componente-ambiental-listado',
  templateUrl: './componente-ambiental-listado.component.html',
  styleUrl: './componente-ambiental-listado.component.scss',
  providers: [MessageService]
})
export class ComponenteAmbientalListadoComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];

  dataSource: any[] = [];
  
  busqueda: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto de monitoreo:', detail: "PUNTO 01 => (PM000323)" }];
  }

  onClickMostrarComponente() {

  }

  onClickBusqueda() {
    if(this.busqueda)
      this.busqueda = false;
    else this.busqueda = true;
  }

  onClickPuntoRes() {
    this.select.emit("PUNTO");
  }
  onClickComponenteRes()  {

  }
  onClickParametroRes() {
    this.select.emit("PARAMETRO");
  }
}
