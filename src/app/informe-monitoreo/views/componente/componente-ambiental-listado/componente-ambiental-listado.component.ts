import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Message, MessageService } from 'primeng/api';
import { PuntoMonitoreo } from '../../puntos/model/PuntoMonitoreo';
import { ComponenteAmbiental } from '../model/ComponenteAmbiental';

@Component({
  selector: 'componente-ambiental-listado',
  templateUrl: './componente-ambiental-listado.component.html',
  styleUrl: './componente-ambiental-listado.component.scss',
  providers: [MessageService]
})
export class ComponenteAmbientalListadoComponent implements OnInit {
  faTrash = faTrashAlt;
  @Input() data!: PuntoMonitoreo;
  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];

  dataSource: any[] = [{orden: 1,nombreComponente:'AIRE//AIRE AMBIENTAL'}, {orden: 2, nombreComponente:'aire 2'}, {orden: 3, nombreComponente:'AGUA'}];
  dataComponente!: ComponenteAmbiental;

  tabResul: string = "COMPONENTE";
  busqueda: boolean = false;

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto de monitoreo:', detail: this.data.nombrePunto +" ("+this.data.codigoPunto+")" }];
  }

  // onClickMostrarComponente() {
  // }

  onClickBusqueda() {
    if(this.busqueda)
      this.busqueda = false;
    else this.busqueda = true;
  }

  onSelected(event: string) {
    this.tabResul = event;
    if (event=="PUNTO") {this.select.emit("PUNTO");} //para mostrar puntos al seleccionar des de parámetro
  }

  onClickPuntoRes() {
    this.select.emit("PUNTO");
  }
  onClickComponenteRes()  {

  }
  onClickParametroRes(dataEvt: ComponenteAmbiental) {
    console.log(dataEvt);
    if(dataEvt != undefined) {
      this.dataComponente = dataEvt;
      this.dataComponente.idPunto = this.data.idPunto;
      this.dataComponente.nombrePunto = this.data.nombrePunto;
      this.tabResul = "PARAMETRO";
    }else {
      this.messageWarn("No se ha detectado ningún componente seleccionado");
    }
  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'noComp', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }
}
