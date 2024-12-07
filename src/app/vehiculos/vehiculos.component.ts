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
  selectedVehiculo: Vehiculo | null = null;

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

  obtenerVehiculo(id: string) {
    this.loading = true;
    this.vehiculosService.getVehiculoPorId(id).subscribe(
      (data) => {
        this.selectedVehiculo = data;
        this.loading = false;
        console.log('Vehículo seleccionado:', this.selectedVehiculo);
      },
      (error) => {
        console.error('Error al obtener vehículo', error);
        this.loading = false;
      }
    );
  }

  descargarDocumento(id: string) {
    this.obtenerVehiculo(id); // Obtener la información del vehículo por su ID

    if (!this.selectedVehiculo) {
      console.error('No se encontró el vehículo.');
      return;
    }

    const url = 'http://3.140.158.80:5080/generate_and_download';
    const headers = { 'Content-Type': 'application/json' };

    const vehiculo = this.selectedVehiculo;

    const requestBody = {
      placeholders: {
        MARCA: vehiculo.marca || 'Valor por defecto',
        MODELO: vehiculo.modelo || 'Valor por defecto',
        KILOMETRAJE: vehiculo.kilometraje || 'Valor por defecto',
        PLACA: vehiculo.placa || 'Valor por defecto',
        TIPO_DE_MTTO: vehiculo.tipoMantenimiento || 'Valor por defecto',
        FECHA: vehiculo.fecha || 'Valor por defecto',
      },
      images_base64: [
        vehiculo.imagenesBase64 || '/9j/4AAQSkZJRgABAQAAAQABAAD...', // Base64 de ejemplo
      ],
    };

    this.http.post(url, requestBody, { headers, responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(response);
        link.download = `documento_${vehiculo.placa || 'vehiculo'}.pdf`;
        link.click();
        console.log('Documento descargado.');
      },
      (error) => {
        console.error('Error al descargar documento', error);
      }
    );
  }
}
