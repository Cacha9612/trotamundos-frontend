
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Vehiculo } from './vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class ReporteventasService {
  private apiUrl = `${environment.apiUrl}`; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) { }
  submitReport(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/reporteventas`, payload);
  }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${this.apiUrl}/api/vehiculos`);
  }
}
