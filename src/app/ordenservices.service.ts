import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Orden } from './orden.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  private apiUrl = `${environment.apiUrl}`; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) {} // Inyección de HttpClient

  // Método para obtener todos los clientes
  getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/orderservices`);
  }

  // Método para generar y descargar el documento
  descargarDocumento(clienteId: number): Observable<Blob> {
    const url = `${this.apiUrl}/generate_and_download`;
    return this.http.post(url, { ID: clienteId }, { responseType: 'blob' });
  }

  getOrdenPorId(clienteId:number):Observable<any>
  {
    const url = `${this.apiUrl}/api/cliente`;
    return this.http.post(url, { ID: clienteId }, { responseType: 'blob' });
  }
  updateOrden(id: number, activo: number): Observable<any> {
    const url = `${this.apiUrl}/api/clienteporid`;
    const body = { ID: id, Activo: activo };
    return this.http.put(url, body);
  }

  
  
}
