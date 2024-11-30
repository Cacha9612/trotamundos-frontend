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

  cargarVehiculos() {
    this.loading = true;
    this.vehiculosService.getVehiculos().subscribe(
      (data) => {
        this.vehiculos = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar vehículos', error);
        this.loading = false;
      }
    );
  }

  descargarDocumento(vehiculo: any) {
    if (!vehiculo) {
      console.error('El objeto vehiculo está vacío o no definido.');
      return;
    }
  
    const url = 'http://3.140.158.80:5080/generate_and_download';
    const headers = { 'Content-Type': 'application/json' };
  
    // Asegúrate de que las propiedades no estén vacías
    const requestBody = {
      placeholders: {
        MARCA: vehiculo.marca || 'Valor por defecto',
        MODELO: vehiculo.modelo || 'Valor por defecto',
        KILOMETRAJE: vehiculo.kilometraje || 'Valor por defecto',
        PLACA: vehiculo.placa || 'Valor por defecto',
        TIPO_DE_MTTO: vehiculo.tipoMantenimiento || 'Valor por defecto',
        FECHA: vehiculo.fecha || 'Valor por defecto'
      },
      images_base64: [
        vehiculo.imagenesBase64 || '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' // Aquí se envía directamente la cadena Base64 o un valor por defecto
      ]
    };
  
    // Imprime el cuerpo de la solicitud antes de enviarla
    console.log('Cuerpo de la solicitud que se enviará:', JSON.stringify(requestBody, null, 2));
  
    return this.http.post(url, requestBody, { headers, responseType: 'blob' }).subscribe({
      next: (response: Blob) => {
        const fileName = `${vehiculo.noSerie}.docx`;
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      },
      error: (error: any) => {
        // Mostrar el error detallado del servidor si está disponible
        if (error.error instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            const errorResponse = JSON.parse(reader.result as string); // Convertimos el Blob en JSON
            console.error('Error al descargar el documento:', errorResponse);
          };
          reader.readAsText(error.error);
        } else {
          console.error('Error al descargar el documento:', error);
        }
      }
    });
  }
  
  
}
