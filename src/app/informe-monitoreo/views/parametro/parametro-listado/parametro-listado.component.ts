import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ComponenteAmbiental } from '../../componente/model/ComponenteAmbiental';

@Component({
  selector: 'parametro-listado',
  templateUrl: './parametro-listado.component.html',
  styleUrl: './parametro-listado.component.scss',
  providers: [MessageService]
})
export class ParametroListadoComponent implements OnInit{
  @Input() data!: ComponenteAmbiental;
  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];

  dataSource: any[] = [];
  busqueda: boolean = false;
  mostrarDetalle: boolean = false;

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto/ Componente:', detail: this.data.nombrePunto +"/ "+ this.data.nombreComponente }];
  }

  onClickMostrarParam() { //para mostrar el arbol
    this.mostrarDetalle = true;
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
    this.select.emit("COMPONENTE");

  }
  onClickParametroRes() {
  }

  onClickCerrarDialog(isShow: boolean) {
    this.mostrarDetalle = isShow;
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'toast', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }
}
