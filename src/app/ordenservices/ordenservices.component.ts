import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Orden } from '../orden.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OrdenService } from '../ordenservices.service';

@Component({
  selector: 'app-ordenservices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordenservices.component.html',
})
export class OrdenservicesComponent implements OnInit {
  orders: Orden[] = [];
  loading = false;
  selectedOrden: Orden | null = null;
  showModal = false;

  constructor(
    private ordersService: OrdenService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarOrders();
  }

  cargarOrders(): void {
    this.loading = true;
    this.ordersService.getOrders().subscribe(
      (data: Orden[]) => {
        this.orders = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar ordenes', error);
        this.loading = false;
      }
    );
  }
  descargarDocumento(idCliente: number): void {
    const urlDocumento = `http://3.140.158.80:5080/generate_and_download_orden?clienteId=${idCliente}`; // Endpoint para generar el documento
    const headers = { 'Content-Type': 'application/json' };

    // Realizar la solicitud GET para generar y descargar el documento
    this.http.get(urlDocumento, { headers, responseType: 'blob' }).subscribe({
      next: (response: Blob) => {
        // Verificar que la respuesta sea un archivo válido
        if (response && response.size > 0) {
          const fileName = `orden_servicio_${idCliente}.docx`; // Nombre del archivo
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
        console.error('Error al generar o descargar el documento:', error);
      },
    });
  }

  abrirModal(orden: Orden): void {
    this.selectedOrden = orden;
    this.showModal = true;
  }
  
  cerrarModal(): void {
    this.showModal = false;
    this.selectedOrden = null;
  }
  
  actualizarEstadoCliente(estado: boolean): void {
    if (!this.selectedOrden) return;

    const clienteId = this.selectedOrden.IdCliente;
    const estadoActivo = estado ? 1 : 0;  // Convertimos el booleano a 1 o 0

    this.ordersService.updateOrden(clienteId, estadoActivo).subscribe({
      next: (response) => {
        console.log('Estado del cliente actualizado', response);

        if(estadoActivo == 1)
        {
          alert('Se autorizó el cliente');
        }
        else{
          alert('Cliente no autorizado');
        }
        
         this.cargarOrders();
         

        // Aquí puedes hacer lo que necesites, como recargar la lista de vehículos o mostrar un mensaje
      },
      error: (error) => {
        console.error('Error al actualizar el estado del vehículo', error);
      }
    });
  }
  
  }

