import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el enrutador
import { ReporteventasService } from '../reporteventas.service'; // Importa el servicio

@Component({
  selector: 'app-reporteventas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reporteventas.component.html',
  styleUrls: ['./reporteventas.component.css'],
})
export class ReporteventasComponent implements OnInit {
  serviceForm: FormGroup;
  vehiculos: any[] = []; // Arreglo para almacenar los vehículos
  successMessage: string = ''; // Variable para almacenar el mensaje de éxito

  constructor(
    private fb: FormBuilder,
    private router: Router, // Inyecta el servicio de enrutamiento
    private reporteventasService: ReporteventasService // Inyecta el servicio
  ) {
    // Inicializando el formulario con la estructura esperada
    this.serviceForm = this.fb.group({
      Id: 0,
      date: '',
      service_order_id: 0,
      vehicle_id: 0,
      credit: '',
      initial_service: '',
      finalized: 0,
      reception: false,
      entry: false,
      repair: false,
      checklist: false,
      technician: '',
      quotation: false,
      authorization: false,
      additional: false,
      washing: false,
      delivery: false,
      comments: ''
    });
  }

  ngOnInit(): void {
    // Llamar al servicio para obtener los vehículos al iniciar el componente
    this.reporteventasService.getVehiculos().subscribe(
      (vehiculos) => {
        this.vehiculos = vehiculos; // Guardar los vehículos en el arreglo
      },
      (error) => {
        console.error('Error al obtener los vehículos', error);
      }
    );
  }

  // Función para manejar el cambio de vehículo
  onVehicleChange(event: Event): void {
    const vehicleId = (event.target as HTMLSelectElement).value;
    const selectedVehicle = this.vehiculos.find((vehiculo) => vehiculo.ID.toString() === vehicleId);

    if (selectedVehicle) {
      // Actualizar el campo de la orden de servicio y el ID del vehículo
      this.serviceForm.patchValue({
        service_order_id: selectedVehicle.IdOrdenServicio,
        vehicle_id: selectedVehicle.ID
      });
    }
  }

  submitForm() {
    console.log('Form Data:', this.serviceForm.value);
    // Llamar al servicio para enviar los datos al servidor
    this.reporteventasService.submitReport(this.serviceForm.value).subscribe(
      (response) => {
        console.log('Reporte guardado correctamente', response);
        // Muestra el mensaje de éxito
        this.successMessage = 'El reporte se ha guardado correctamente.';
        
        // Redirige a la vista de reporteventasvista después de 2 segundos
        setTimeout(() => {
          this.router.navigate(['/reporteventasvista']);
        }, 2000);
      },
      (error) => {
        console.error('Error al guardar el reporte', error);
        // Aquí puedes manejar el error (ej., mostrar un mensaje de error al usuario)
      }
    );
  }
}
