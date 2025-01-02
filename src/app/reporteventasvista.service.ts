import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteVentasVista } from './reporteventasvista.interface';

@Injectable({
  providedIn: 'root',
})
export class ReporteventasvistaService {
  private apiUrl = 'http://3.140.158.80:5080/api/obtenerreportes';

  constructor(private http: HttpClient) {}

  getReporte(): Observable<ReporteVentasVista[]> {
    return this.http.get<ReporteVentasVista[]>(this.apiUrl);
  }
}
