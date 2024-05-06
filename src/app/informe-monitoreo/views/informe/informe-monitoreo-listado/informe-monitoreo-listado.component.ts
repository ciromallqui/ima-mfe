import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { InformeMonitoreo } from '../model/InformeMonitoreo';
import { InformeMonitoreoService } from '../../../services/informe-monitoreo.service';
import { faPencil, faTrashAlt, faExpandArrowsAlt, faLocationArrow, faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'informe-monitoreo-listado',
  templateUrl: './informe-monitoreo-listado.component.html',
  styleUrl: './informe-monitoreo-listado.component.scss',
  providers: [MessageService]
})
export class InformeMonitoreoListadoComponent implements OnInit{
  faPencil = faPencil;
  faTrash = faTrashAlt;
  faArrowsAlt = faExpandArrowsAlt;
  faPaperPlane = faLocationArrow;
  faFileExcel = faFileExcel;

  mostrarDetalle: boolean = false;
  valor: string | undefined;
  infoMenu: MenuItem[] | undefined;
  contextMenu: MenuItem[] | undefined;
  dataSource!: InformeMonitoreo[];
  selectInforme!: InformeMonitoreo;
  showResultado: boolean = false;

  first: number = 0;
  rows: number = 10;

  constructor( 
    private informeMonitoreoService: InformeMonitoreoService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.menuItem();
    this.listado();
  }

  listado(){
    this.informeMonitoreoService.listaInforme().subscribe((res: any) =>{
      this.dataSource = res;
    });
  }

  onPageChange(event: any){
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  onClickAgregar(){
    console.log(this.valor);
    this.mostrarDetalle = true;
    // this.messageService.add({ key: 'tc', sticky: false, severity: 'error', summary: 'Product Selected', detail: "Holaaaa" });
  }

  onClickResultado() {
    this.showResultado = true;
  }

  descargarManual() {
    console.log("Archivo de descarga")
  }

  copiarInforme(informe: InformeMonitoreo){
    console.log(informe);
  }
  copiarInformeRes(informe: InformeMonitoreo){
    console.log(informe);
  }
  restaurarInforme(informe: InformeMonitoreo){
    console.log(informe);
  }
  reasignarInforme(informe: InformeMonitoreo){
    console.log(informe);
  }

  onClickCerrar(event: boolean) {
    this.mostrarDetalle = event;
  }

  tableHeader: string[] = ["N°","OPCIONES","NOMBRE DEL USUARIO","INFORME DE MONITOREO AMBIENTAL","INSTRUMENTO DE GESTIÓN","ETAPA","N° REGISTRO","ESTADO","FECHA REGISTRO","FECHA CIERRE","REPORTE"];
  menuItem(){
    this.infoMenu = [
      {label: 'VIDEO TUTORIAL', icon: 'pi pi-youtube', command: () => {this.descargarManual();}},
      {label: 'DESCARGAR MANUAL', icon: 'pi pi-sign-out', command: () => {this.descargarManual();}},
      {label: 'DESCARGAR GUÍA', icon: 'pi pi-sign-out', command: () => {this.descargarManual();}},
      {label: 'DESCARGAR MANUAL, USUARIO PRINCIPAL Y SECUNDARIO', icon: 'pi pi-sign-out', command: () => {this.descargarManual();}}
    ];

    this.contextMenu = [
      { label: 'Copiar informe', command: () => this.copiarInforme(this.selectInforme) },
      { label: 'Copiar informe y resultados', command: () => this.copiarInformeRes(this.selectInforme) },
      { label: 'Restaurar informe', command: () => this.restaurarInforme(this.selectInforme) },
      { label: 'Reasignar informe', command: () => this.reasignarInforme(this.selectInforme) }
    ];
  }
}