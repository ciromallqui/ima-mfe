export interface ParametroMonitoreo {
  idInfMonResultado: number;
  signoResultado: string;
  valorResultado: string;
  valorLimite: string;
  unidadMedidaRes: string;
  idIesParametroMed: number;
  tipoMonitoreo: string;
  idParametro: number;
  idRedMonComponente: number;
  idIesRedMonitoreo: number;
  parametroDescripcion: string;
  idAcreditacion: string;
  normativa: string;
  idComponente: number;
  idLimite: string;
  listaSigno: SignoMonitoreo[];
  codigo: string;
  idTipoValor: string;
  listaLimite: LimiteMonitoreo[];
  idFrecuenciaReporte: string;
  idRedMonitoreo: number;
  idRedMonPar: number;
  esPuntoAdicional: boolean;
  esParametroAdicional: boolean;
  listUnidadMedida: UnidadMedidaMonitoreo[];
  esLimiteMultiple: boolean;
  valorLc: string;
  valorLd: string;
  valorUnidadMedia: string;
  idValorUnidadMedida: number;
}

export interface SignoMonitoreo {
  idTipo: number;
  id: string;
  nombre: string;
}

export interface LimiteMonitoreo {
  idTipo: number;
  id: string;
  nombre: string;
}

export interface UnidadMedidaMonitoreo {
  id: string;
  nombre: string;
}



export interface EtapaFrecuenciaReporteMonitoreo {
  listaFrecMonitoreo:EtapaMonitoreo[];
  listaFrecuenciaMonitoreo:FrecuenciaMonitoreo[];
  listaFrecuenciaReporte:FrecuenciaReporte[];
}

export interface FrecuenciaMonitoreo {
  idTipo: number;
  id: string;
  nombre: string;
}

export interface FrecuenciaReporte {
  idTipo: number;
  id: string;
  nombre: string;
}

export interface EtapaMonitoreo {
  idEtapa: number;
  codEtapa: string;
  nombreEtapa: string;
  isCheked: boolean;
  idIesParametroMed: number;
  esParametroAdicional: boolean;
}
