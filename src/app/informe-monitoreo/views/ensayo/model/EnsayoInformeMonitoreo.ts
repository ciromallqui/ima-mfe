export interface EnsayoInformeMonitoreo{
    idInformeEnsayo: number;
    nroInformeEnsayo: string;
    audCreadoPor: string;
    nombreLaboratorio: string;
    ruc: string; 
    idArchivo: number;
    idInformeMonitoreo: number;
    tipoMonitoreo: string;
    nombreArchivo: string;
    nombreArchivoOriginal: string;
    rutaAlfresto: string;
    uiid: string;
    txFechaEmision: Date;
    txFechaRecepcion: Date;
    orden: number
}

export interface EnsayoInformePuntoMonitoreo {
    idIesRedMonitoreo: number;
    nombrePunto: string;
    orden: number
}

export interface EnsayoInformeComponenteMonitoreo {
    idComponente: number
    componente: string;
    idIesRedMonitoreo: number;
    idCompIesRedmon: string;
    orden: number;
}

export interface EnsayoInformeParametroMonitoreo {
    descripcion: string;
    idParametroDet: number;
    idCompIesRedmon: string;
    idIesRedMonitoreo: number;
    fechaMuestreoInicial: string,
    orden: number
}

export interface EnsayoInformeParametroAsociadoMonitoreo {
    descripcion: string;
    idParametroDet: number;
    idInformeEnsayo: number;
    nombrePunto: string;
    componente: string;
    unidadMedidaRes: string;
    signoResultado: string;
    valorResultado: string;
    orden: number
}

