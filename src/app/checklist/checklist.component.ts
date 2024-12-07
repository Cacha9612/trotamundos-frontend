import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../checklist.service';  // Asegúrate de tener un servicio para manejar los checklists
import { Checklist } from '../checklist.interface';  // Define una interfaz similar a la de los vehículos
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
  checklists: Checklist[] = [];
  loading = false;

  constructor(
    private checklistService: ChecklistService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarChecklists();
  }

  cargarChecklists(): void {
    this.loading = true;
    this.checklistService.getChecklists().subscribe(
      (data: Checklist[]) => {
        this.checklists = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar checklists', error);
        this.loading = false;
      }
    );
  }

  descargarDocumento(idChecklist: number): void {
    const urlChecklist = `http://3.140.158.80:5080/api/obtenerchecklist?Idchecklist=${idChecklist}`;
    
    const urlDocumento = 'http://3.140.158.80:5080/generate_and_download'; // Endpoint para generar el documento
    const headers = { 'Content-Type': 'application/json' };

    // Consultar al endpoint para obtener los datos del checklist
    this.http.get(urlChecklist, { headers }).subscribe({
      next: (checklist: any) => {
        if (!checklist) {
          console.error(`No se encontraron datos para el checklist con ID: ${idChecklist}`);
          return;
        }

        // Combinamos todas las imágenes en un array
        const imagesBase64 = [
          checklist.lectura_codigos_foto,
          checklist.servofreno_foto,
          checklist.pedal_freno_foto,
          checklist.pedal_estacionamiento_foto,
          checklist.cinturon_seguridad_foto,
          checklist.cuadro_instrumentos_foto,
          checklist.aire_acondicionado_foto,
          checklist.bocina_claxon_foto,
          checklist.iluminacion_interior_foto,
          checklist.iluminacion_externa_foto,
          checklist.limpiaparabrisas_foto,
          checklist.limpia_medallon_foto,
          checklist.neumaticos_friccion_foto,
          checklist.otros_vehiculo_en_piso_foto,
          checklist.estado_fugas_aceite_foto,
          checklist.estado_nivel_calidad_lubricante_transmision_foto,
          checklist.estado_nivel_calidad_lubricante_diferencial_foto,
          checklist.cubrepolvos_flechas_foto,
          checklist.componentes_direccion_foto,
          checklist.componentes_suspesion_foto,
          checklist.sistema_escape_completo_foto,
          checklist.sistema_alimentacion_combustible_foto,
          checklist.filtro_combustible_foto,
          checklist.control_fugas_direccion_hidraulica_foto,
          checklist.otros_altura_total_foto,
          checklist.rodamiento_mazas_rueda_foto,
          checklist.holgura_partes_suspension_rueda_foto,
          checklist.control_neumaticos_desgaste_presion_foto,
          checklist.profundidad_foto,
          checklist.presion_foto,
          checklist.otros_altura_media_foto,
          checklist.nivel_calidad_aceite_motor_foto,
          checklist.filtro_aire_foto,
          checklist.filtro_polen_foto,
          checklist.filtro_pcv_foto,
          checklist.valvula_pcv_foto,
          checklist.bujias_encendido_foto,
          checklist.cables_bujias_bobinas_ignicion_foto,
          checklist.nivel_anticongenlante_foto,
          checklist.tapon_radiador_foto,
          checklist.mangueras_sistema_foto,
        ].filter(foto => foto);  // Filtra las fotos nulas o indefinidas

        // Verificar la estructura del requestBody
        const requestBody = {
          placeholders: {
            ORDEN_DE_SERVICIO: checklist.id_ordendeservicio.toString()|| 'Valor por defecto',
            EMPLEADO: checklist.Id_empleado.toString() || 'Valor por defecto',
            NUMERO_DE_SERIE:checklist.numeroserie || 'Valor por defecto',
            FECHA: new Date().toISOString(), // Fecha actual
          },
          images_base64: imagesBase64,
        };

        // Log para verificar la estructura del requestBody antes de enviarlo
        console.log('Request Body:', JSON.stringify(requestBody, null, 2));

        // Realizar la solicitud POST para generar y descargar el documento
        this.http.post(urlDocumento, requestBody, { headers, responseType: 'blob' }).subscribe({
          next: (response: Blob) => {
            // Verificar que la respuesta sea un archivo válido
            if (response && response.size > 0) {
              const fileName = `checklist_${checklist.orden_de_servicio || 'documento'}.docx`; // Nombre del archivo
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
        console.error('Error al obtener los datos del checklist:', error); // Manejar errores de la consulta al checklist
      },
    });
  }
}
