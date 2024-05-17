import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ComponenteAmbiental } from '../../componente/model/ComponenteAmbiental';
import { ParametroMonitoreoService } from '../../../services/parametro-monitoreo.service';
import { ParametroMonitoreo } from '../model/parametroMonitoreo';
import { faCaretRight, faClock, faComment, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ConfigDialog } from '../../../model/helper/ConfigDialog';

@Component({
  selector: 'parametro-listado',
  templateUrl: './parametro-listado.component.html',
  styleUrl: './parametro-listado.component.scss',
  providers: [MessageService]
})
export class ParametroListadoComponent implements OnInit{
  faClock = faClock;
  faCaret = faCaretRight;
  faComment = faComment;
  faTrashAlt = faTrashAlt;

  @Input() data!: ComponenteAmbiental;
  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];
  first:number=0;
  rows:number=10;
  dataSource: ParametroMonitoreo[] = [];
  busqueda: boolean = false;
  tableHeader:string[] = ['N°','OPCIONES','NORMATIVA','PARÁMETRO','MULTIPLE','TIPO LÍMITE','LÍMITE','SIGNO','RESULTADO','U. MEDIDA','ACREDITACIÓN'];

  configDialog: ConfigDialog = {};

  constructor(
    private messageService: MessageService,
    private parametroMonitoreoService: ParametroMonitoreoService
  ){}

  ngOnInit(): void {
    this.infoPunto = [{ sticky: false, closable: false, severity: 'success', summary: 'Punto/ Componente:', detail: this.data.nombrePunto +"/ "+ this.data.nombreComponente }];
    this.onClickParametroRes();
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  onClickParametroRes() {
    this.parametroMonitoreoService.listarParametro().subscribe((r)=>{
      this.dataSource = r;
    });
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

  onClickMostrarParam(){
    this.onClickAbrirDialogo('SELECCIONAR PARÁMETROS','800px', null,'PARAMETRO');
  }
  onClickAgregarEtapaFrecuencia(){
    this.onClickAbrirDialogo('ETAPA, FRECUENCIA DE MONITOREO Y DE REPORTE','800px', '650px','ETAPA');
  }
  onClickAgregarMuestra(){
    this.onClickAbrirDialogo('INFORMACIÓN DE LA MUESTRA','800px', null,'MUESTRA');
  }

  onClickAgregarObservacion(){

  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'toast', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }

  onClickAbrirDialogo(titulo: string, width: string, height: string, opcion: string, mostrarDialog: boolean = true) {
    this.configDialog = {title: titulo, width: width, height: height, option: opcion, show: mostrarDialog};
  }
  onClickCerrarDialog(isShow: boolean) {
    this.configDialog.show = isShow;
  }
}
