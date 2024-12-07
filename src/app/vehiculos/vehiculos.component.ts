import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculos.component.html',
})
export class VehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  loading = false;

  constructor(
    private vehiculosService: VehiculosService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void {
    this.loading = true;
    this.vehiculosService.getVehiculos().subscribe(
      (data: Vehiculo[]) => {
        this.vehiculos = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar vehículos', error);
        this.loading = false;
      }
    );
  }

  descargarDocumento(idVehiculo: number): void {
    const urlVehiculo = `http://3.140.158.80:5080/api/vehiculo?idVehiculo=${idVehiculo}`;
    const urlDocumento = 'http://3.140.158.80:5080/generate_and_download'; // Endpoint para generar el documento
    const headers = { 'Content-Type': 'application/json' };
  
    // Consultar al endpoint para obtener los datos del vehículo
    this.http.get(urlVehiculo, { headers }).subscribe({
      next: (vehiculo: any) => {
        if (!vehiculo) {
          console.error(`No se encontraron datos para el vehículo con ID: ${idVehiculo}`);
          return;
        }
  
        // Combinamos todas las imágenes en un array
       
  
        // Convertir las imágenes a Base64 (si no lo están)
     
  
        // Verificar la estructura del requestBody
        const requestBody = {
          placeholders: {
            MARCA: vehiculo.Marca || 'Valor por defecto',
            MODELO: vehiculo.Modelo || 'Valor por defecto',
            KILOMETRAJE: vehiculo.Kms?.toString() || 'Valor por defecto',
            PLACA: vehiculo.Placa || 'Valor por defecto',
            TIPO_DE_MTTO: vehiculo.Tipo || 'Valor por defecto',
            FECHA: new Date().toISOString(), // Fecha actual
          },
          images_base64: [
            vehiculo.Espejo_retrovisor_foto,
            vehiculo.Espejo_derecho_foto,
            vehiculo.Espejo_izquierdo_foto,
            vehiculo.Antena_foto,
            vehiculo.Radio_foto,
            vehiculo.Encendedor_foto,
            vehiculo.Gato_foto,
            vehiculo.Herramienta_foto,
            vehiculo.Llanta_refaccion_foto,
            vehiculo.Limpiadores_foto,
            vehiculo.Pintura_rayada_foto,
            vehiculo.Cristales_rotos_foto,
            vehiculo.Golpes_foto,
            vehiculo.Tapetes_foto,
            vehiculo.Extintor_foto,
            vehiculo.Tapones_gasolina_foto,
            vehiculo.Calaveras_rotas_foto,
            vehiculo.Molduras_completas_foto
          ].filter(foto => foto) // Filtra las fotos nulas o indefinidas
        };
  
        // Log para verificar la estructura del requestBody antes de enviarlo
        console.log('Request Body:', JSON.stringify(requestBody, null, 2));
  
        // Realizar la solicitud POST para generar y descargar el documento
        this.http.post(urlDocumento, requestBody, { headers, responseType: 'blob' }).subscribe({
          next: (response: Blob) => {
            // Verificar que la respuesta sea un archivo válido
            if (response && response.size > 0) {
              const fileName = `${vehiculo.No_serie || 'documento'}.docx`; // Nombre del archivo
              const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = fileName; // Descargar el archivo con el nombre correspondiente
              link.click();
            } else {
              console.error('La respuesta del servidor no contiene un archivo válido.');
            }
          },
          error: (error: any) => {
            console.error('Error al generar o descargar el documento:', requestBody);
            // Log del cuerpo del request para ver si tiene la estructura correcta
            console.log('Request Body enviado:', JSON.stringify(requestBody, null, 2));
          },
        });
      },
      error: (error: any) => {
        console.error('Error al obtener los datos del vehículo:', error); // Manejar errores de la consulta al vehículo
      },
    });
  }
  
  
  
  
  
}

