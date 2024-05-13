import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ComponenteAmbiental } from '../../componente/model/ComponenteAmbiental';
import { ParametroMonitoreoService } from '../../../services/parametro-monitoreo.service';
import { ParametroMonitoreo } from '../model/parametroMonitoreo';
import { faCaretRight, faClock, faComment, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'parametro-listado',
  templateUrl: './parametro-listado.component.html',
  styleUrl: './parametro-listado.component.scss',
  providers: [MessageService]
})
export class ParametroListadoComponent implements OnInit{
  /*icons*/
  faClock = faClock;
  faCaret = faCaretRight;
  faComment = faComment;
  faTrash = faTrash;
  /*fin*/
  @Input() data!: ComponenteAmbiental;
  @Output() select: EventEmitter<string> = new EventEmitter();
  infoPunto!: Message[];
  first:number=0;
  rows:number=10;
  dataSource: ParametroMonitoreo[] = [];
  busqueda: boolean = false;
  mostrarDetalle: boolean = false;
  tableHeader:string[]=['N°','OPCIONES','NORMATIVA','PARÁMETRO','MULTIPLE','TIPO LÍMITE','LÍMITE','SIGNO','RESULTADO','U. MEDIDA','ACREDITACIÓN'];
  /*Diseño del dialogo */
  tituloHeaderDialogo: string = "";
  widthDialogo: string = '';
  heightDialogo: string = '';
  modalContent?:
    | ''
    | 'AGREGAR-ETAPA-FRECUENCIA'
    | 'AGREGAR-MUESTRA';
  /*Fin*/
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
    this.parametroMonitoreoService.listarParametro().subscribe((r)=>{
      this.dataSource = r;
    })
  }

  onClickCerrarDialog(isShow: boolean) {
    this.mostrarDetalle = isShow;
  }

  onClickAgregarMuestra(){

  }

  onClickAgregarEtapaFrecuencia(){
    this.onclickAbrirDialogo('ETAPA, FRECUENCIA DE MONITOREO Y REPORTE','1000px', '800px','AGREGAR-ETAPA-FRECUENCIA');
  }

  onClickAgregarObservacion(){

  }

  messageWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'toast', sticky: false, severity: 'warn', summary: 'Información', detail: message });
  }

  onclickAbrirDialogo(
    tituloHeaderDialogo: string,
    widthDialogo: string,
    heightDialogo: string,
    modalContent: any,
    mostrarDetalle: boolean = true
  ) {
    this.tituloHeaderDialogo = tituloHeaderDialogo;
    this.widthDialogo = widthDialogo;
    this.heightDialogo = heightDialogo;
    this.modalContent = modalContent;
    this.mostrarDetalle = mostrarDetalle;
  }

  onClickCerrar(event: boolean) {
    this.mostrarDetalle = event;
  }
}
