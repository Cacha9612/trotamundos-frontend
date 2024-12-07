import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  private apiUrl = `${environment.apiUrl}`; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) {} // Inyección de HttpClient

  // Método para obtener todos los vehículos
  getVehiculos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/vehiculos`);
  }

  // Método para generar y descargar el documento
  descargarDocumento(vehiculoId: number): Observable<Blob> {
    const url = `${this.apiUrl}/generate_and_download`;
    return this.http.post(url, { ID: vehiculoId }, { responseType: 'blob' });
  }

  getVehiculoPorId(vehiculoId:number):Observable<any>
  {
    const url = `${this.apiUrl}/api/vehiculo`;
    return this.http.post(url, { ID: vehiculoId }, { responseType: 'blob' });
  }
}
