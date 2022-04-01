export interface ClienteModel {
    nombreusuario: string;
    nombrecompleto: string;
    edad: number;
    fechanacimiento: string;
    codigoQr: string;
    email: string;
    tel: string;
}

export interface PromocionModel {
    id_promocion: number;
    promociondescripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    codigo_promocion: string;
    descripcion: string;
}

export interface ClientesInfo {
    id_cliente: number;
    nombre_usuario: string;
    nombre_completo: string;
    edad: number;
    fecha_registro: string;
    hora_registro: string;
    fecha_nacimiento: string;
    email: string;
    tel: string;
    estatus: string;
}

export interface UsuariosInfo {
    id_usuario: number;
    nombre: string;
}

export interface ClienteVisita {
    idCliente: number;
    fechaRegistro: string;
    idUsuarioAtencion: number;
    idCodigoPromocion: number;
    comentarios: string;
    servicio: string;
    total: number;
}