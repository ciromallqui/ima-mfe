import { Component, OnInit } from '@angular/core';
import { DocumentoMonitoreo } from '../model/DocumentoMonitoreo';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { DocumentoMonitoreoService } from '../../../services/documento-monitoreo.service';

@Component({
  selector: 'documento-monitoreo-listado',
  templateUrl: './documento-monitoreo-listado.component.html',
  styleUrl: './documento-monitoreo-listado.component.scss',
  providers: [ConfirmationService]
})
export class DocumentoMonitoreoListadoComponent implements OnInit {
  first = 0;
  rows = 10;
  dataSource: DocumentoMonitoreo[] = [];
  tableHeader: string[] = ['N°', 'OPCIONES', 'NOMBRE DEL DOCUMENTO', 'TIPO DE DOCUMENTO', 'FECHA REGISTRO', 'ARCHIVO ADJUNTO'];
  /*Diseño del dialogo */
  tituloHeaderDialogo: string = "";
  widthDialogo: string = '';
  heightDialogo: string = '';
  modalContent?:
    | ''
    | 'AGREGAR-EDITAR-DOCUMENTO'
    | 'VER-DATOS-EQUIPO'
    | 'VER-DATOS-ENSAYO';
  mostrarDetalle: boolean = false;
  /*Fin*/

  constructor(private documentoMonitoreoService: DocumentoMonitoreoService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    this.listadoDocumentos();
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  listadoDocumentos() {
    this.documentoMonitoreoService.listaDocumentoMonitoreo().subscribe((r) => {
      this.dataSource = r;
    })
  }

  onClickAgregarDocumento() {
    this.onclickAbrirDialogo('AGREGAR INFORME DE ENSAYO', '600px', '420px', 'AGREGAR-EDITAR-DOCUMENTO');
  }

  onClickEditarDocumento() {
    this.onclickAbrirDialogo('AGREGAR INFORME DE ENSAYO', '600px', '420px', 'AGREGAR-EDITAR-DOCUMENTO');
  }

  onClickEliminarDocumento() {
    this.confirmationService.confirm({
      header: 'MONITOREO',
      message: '¿Está seguro que desea eliminar el registro?',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'El documento se eliminó correctamente.', life: 3000 });
      },
      reject: () => {
      }
    });
  }

  onClickVerDatos(data: DocumentoMonitoreo) {
    console.log(data)
    if (data.modulo.includes('EQUIPO')) {
      this.onclickAbrirDialogo('DATOS DEL ARCHIVO DE EQUIPO', '700px', '600px', 'VER-DATOS-EQUIPO');
    }

    if (data.modulo.includes('ENSAYO')) {
      this.onclickAbrirDialogo('DATOS DEL ARCHIVO DE ENSAYO',  '700px', '670px', 'VER-DATOS-ENSAYO');
    }
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
