import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { InformeMonitoreo } from '../model/InformeMonitoreo';
import { InformeMonitoreoService } from '../../../services/informe-monitoreo.service';
import { faPencil, faTrashAlt, faExpandArrowsAlt, faLocationArrow, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { DropdownList } from '../model/DropdownList';

@Component({
  selector: 'informe-monitoreo-listado',
  templateUrl: './informe-monitoreo-listado.component.html',
  styleUrl: './informe-monitoreo-listado.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class InformeMonitoreoListadoComponent implements OnInit{
  faPencil = faPencil;
  faTrash = faTrashAlt;
  faArrowsAlt = faExpandArrowsAlt;
  faPaperPlane = faLocationArrow;
  faFileExcel = faFileExcel;

  selectInforme!: InformeMonitoreo;
  infoMenu: MenuItem[] | undefined;
  contextMenu: MenuItem[] | undefined;
  dataSource!: InformeMonitoreo[];

  listaSubsector!: DropdownList[];
  listaUnidadFiscalizable!: DropdownList[];
  listaEstado!: DropdownList[];

  mostrarDlgDetalle: boolean = false;
  mostrarDlgEnvio: boolean = false;
  showResultado: boolean = false;
  openDlgEliminar: boolean = false;
  openDlgConcluirr: boolean = false;

  first: number = 0;
  rows: number = 10;

  constructor( 
    private informeMonitoreoService: InformeMonitoreoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
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
    this.mostrarDlgDetalle = true;
    // this.messageService.add({ key: 'tc', sticky: false, severity: 'error', summary: 'Product Selected', detail: "Holaaaa" });
  }

  onClickResultado() {
    this.showResultado = true;
  }

  onClickPresentar(data: InformeMonitoreo) {
    this.mostrarDlgEnvio = true;
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

  onClickCerrarDetalle(event: boolean) {
    this.mostrarDlgEnvio = event;
    this.mostrarDlgDetalle = event;
  }

  onClickEliminar(data: InformeMonitoreo) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea eliminar el registro?',
      accept: () => {
        this.openDlgEliminar = false;
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'El informe de ensayo se eliminó correctamente.', life: 3000 });
      },
      reject: () => {
        this.openDlgEliminar = false;
      }
    });
  }
  onClickConcluir(data: InformeMonitoreo) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea concluir \n el Informe de Monitoreo?',
      accept: () => {
        this.openDlgConcluirr = false;
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Informe concluido con éxito.', life: 3000 });
      },
      reject: () => {
        this.openDlgConcluirr = false;
      }
    });
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