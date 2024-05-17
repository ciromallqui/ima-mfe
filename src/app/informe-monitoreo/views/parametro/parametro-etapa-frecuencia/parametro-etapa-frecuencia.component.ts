import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParametroMonitoreoService } from '../../../services/parametro-monitoreo.service';
import { EtapaMonitoreo, FrecuenciaMonitoreo, FrecuenciaReporte } from '../../../model/parametro/parametroMonitoreo';

@Component({
  selector: 'parametro-etapa-frecuencia',
  templateUrl: './parametro-etapa-frecuencia.component.html',
  styleUrl: './parametro-etapa-frecuencia.component.scss'
})
export class ParametroEtapaFrecuenciaComponent implements OnInit{
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  /* etapaFrecuenciaReporteMonitoreo?:EtapaFrecuenciaReporteMonitoreo[]=[]; */
  etapaMonitoreo:EtapaMonitoreo[]=[]
  frecuenciaMonitoreo:FrecuenciaMonitoreo[]=[];
  frecuenciaReporte:FrecuenciaReporte[]=[];

  constructor(private parametroMonitoreoService:ParametroMonitoreoService){}

  ngOnInit(): void {
    this.listarEtapaFrecuenciaReporteMonitoreo();
  }

  listarEtapaFrecuenciaReporteMonitoreo(){
    this.parametroMonitoreoService.listarParametroEtapaFrecuencia().subscribe((r)=>{
      this.etapaMonitoreo = r[0].listaFrecMonitoreo;
      this.frecuenciaMonitoreo = r[0].listaFrecuenciaMonitoreo;
      this.frecuenciaReporte = r[0].listaFrecuenciaReporte;
      console.log(r);
    });
  }

  onClickCancelar() {
    this.close.emit(false);
  }

}
