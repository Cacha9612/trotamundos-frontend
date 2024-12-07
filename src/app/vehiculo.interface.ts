export interface Vehiculo {
  Id_Cliente: number;
  Id_Empleado: number;
  NombreCliente?: string; // Opcional si lo obtienes por separado
  NombreEmpleado?: string; // Opcional si lo obtienes por separado
  Color: string;
  No_serie: string;
  Tipo: string;
  Motor: string;
  Kms: number;
  Espejo_retrovisor: number; // 0 o 1
  Espejo_izquierdo: number; // 0 o 1
  Espejo_derecho: number; // 0 o 1
  Antena: number; // 0 o 1
  Tapones_ruedas: number; // 0 o 1
  Radio: number; // 0 o 1
  Encendedor: number; // 0 o 1
  Gato: number; // 0 o 1
  Herramienta: number; // 0 o 1
  Llanta_refaccion: number; // 0 o 1
  Limpiadores: number; // 0 o 1
  Pintura_rayada: number; // 0 o 1
  Cristales_rotos: number; // 0 o 1
  Golpes: number; // 0 o 1
  Tapetes: number; // 0 o 1
  Extintor: number; // 0 o 1
  Tapones_gasolina: number; // 0 o 1
  Calaveras_rotas: number; // 0 o 1
  Molduras_completas: number; // 0 o 1
  Espejo_retrovisor_foto: string; // Lista de imágenes
  Espejo_izquierdo_foto: string; // Lista de imágenes
  Espejo_derecho_foto: string; // Lista de imágenes
  Antena_foto: string; // Lista de imágenes
  Tapones_ruedas_foto: string; // Lista de imágenes
  Radio_foto: string; // Lista de imágenes
  Encendedor_foto: string; // Lista de imágenes
  Gato_foto: string; // Lista de imágenes
  Herramienta_foto: string; // Lista de imágenes
  Llanta_refaccion_foto: string; // Lista de imágenes
  Limpiadores_foto: string; // Lista de imágenes
  Pintura_rayada_foto: string; // Lista de imágenes
  Cristales_rotos_foto: string; // Lista de imágenes
  Golpes_foto: string; // Lista de imágenes
  Tapetes_foto: string; // Lista de imágenes
  Extintor_foto: string; // Lista de imágenes
  Tapones_gasolina_foto: string; // Lista de imágenes
  Calaveras_rotas_foto: string; // Lista de imágenes
  Molduras_completas_foto: string; // Lista de imágenes
  ID: number;
  Marca: string; // Correcto (Usar "Marca" en lugar de "marca")
  Modelo: string; // Correcto (Usar "Modelo" en lugar de "modelo")
  Kilometraje: number; // Asegúrate de incluirlo si no está
  Placa: string; // Correcto (Usar "Placa" en lugar de "placa")
  TipoMantenimiento?: string; // Usa este nombre
  Fecha: Date; // Correcto (Usar "Fecha" en lugar de "fecha")
  ImagenesBase64?: string[];


}

  