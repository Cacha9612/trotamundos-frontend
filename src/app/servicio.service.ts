import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private apiUrl = `${environment.apiUrl}`; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) {} // Inyección de HttpClient

  // Método para obtener todos los vehículos
  getServicios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/obtenerservicios`);
  }

  // Método para generar y descargar el documento
  descargarDocumento(servicioId: number): Observable<Blob> {
    const url = `${this.apiUrl}/generate_and_download`;
    return this.http.post(url, { ID: servicioId }, { responseType: 'blob' });
  }

  getServicioPorId(servicioId:number):Observable<any>
  {
    const url = `${this.apiUrl}/api/obtenerservicio`;
    return this.http.post(url, { ID: servicioId }, { responseType: 'blob' });
  }

  getChecklist(idChecklist: number): Observable<any> {
    const url = `${this.apiUrl}/api/obtenerservicio`; // Endpoint correcto
    return this.http.post(url, { ID: idChecklist });
  }
  
}
