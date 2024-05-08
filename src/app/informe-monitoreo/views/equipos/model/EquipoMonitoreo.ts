export interface EquipoMonitoreo {
    audCreadoPor: string;
    audFechaModificacion: string;
    audModificadoPor: string;
    audfechaCreacion: Date;
    fechaFinal: Date;
    fechaInicial: Date;
    idArchivo: number;
    idCadenaCustodia: number;
    idEquipo: number;
    idInformeMonitoreo: number;
    idLineaBase: number;
    marca: string;
    modelo: string;
    nombre: string;
    nombreArchivo: string;
    nombreArchivoOriginal: string;
    nroOrigenEquipo: number;
    nroSerieEquipo: string;
    rutaAlfresto: string;
    tipoMonitoreo: string;
    txFechaFinal: Date;
    txFechaInicial: Date;
    uiid: string;
    usuario: string;
    orden?: number;
}

export interface EquipoPuntoMonitoreo {
    idIesRedMonitoreo: number;
    nombrePunto: string;
    orden: number
}

export interface EquipoComponenteMonitoreo {
    idComponente: number
    componente: string;
    idIesRedMonitoreo: number;
    idCompIesRedmon: string;
    orden: number;
}

export interface EquipoParametroMonitoreo {
    descripcion: string;
    idParametroDet: number;
    idCompIesRedmon: string;
    idIesRedMonitoreo: number;
    fechaMuestreoInicial: string,
    orden: number
}

export interface EquipoParametroAsociadoMonitoreo {
    descripcion: string;
    idParametroDet: number;
    idEquipo: number;
    nombrePunto: string;
    componente: string;
    unidadMedidaRes: string;
    orden: number
}