
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Clientes } from '../clientes.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[] = [];
  loading = false;
  selectedCliente: Clientes | null = null;
  showModal = false;

  constructor(
    private clientesService: ClientesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.loading = true;
    this.clientesService.getClientes().subscribe(
      (data: Clientes[]) => {
        this.clientes = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar clientes', error);
        this.loading = false;
      }
    );
  }
  descargarDocumento(idCliente: number): void {
    const urlDocumento = `http://3.140.158.80:5080/generar-word/${idCliente}`; // Endpoint para generar el documento
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

  abrirModal(cliente: Clientes): void {
    this.selectedCliente = cliente;
    this.showModal = true;
  }
  
  cerrarModal(): void {
    this.showModal = false;
    this.selectedCliente = null;
  }
  
  actualizarEstadoCliente(estado: boolean): void {
    if (!this.selectedCliente) return;

    const clienteId = this.selectedCliente.idCliente;
    const estadoActivo = estado ? 1 : 0;  // Convertimos el booleano a 1 o 0

    this.clientesService.updateCliente(clienteId, estadoActivo).subscribe({
      next: (response) => {
        console.log('Estado del cliente actualizado', response);

        if(estadoActivo == 1)
        {
          alert('Se autorizó el cliente');
        }
        else{
          alert('Cliente no autorizado');
        }
        
         this.cargarClientes();
         

        // Aquí puedes hacer lo que necesites, como recargar la lista de vehículos o mostrar un mensaje
      },
      error: (error) => {
        console.error('Error al actualizar el estado del vehículo', error);
      }
    });
  }
  
  }

