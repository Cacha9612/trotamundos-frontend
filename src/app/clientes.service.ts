import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Clientes } from './clientes.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = `${environment.apiUrl}`; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) {} // Inyección de HttpClient

  // Método para obtener todos los clientes
  getClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/clientes`);
  }

  // Método para generar y descargar el documento
  descargarDocumento(clienteId: number): Observable<Blob> {
    const url = `${this.apiUrl}/generate_and_download`;
    return this.http.post(url, { ID: clienteId }, { responseType: 'blob' });
  }

  getClientePorId(clienteId:number):Observable<any>
  {
    const url = `${this.apiUrl}/api/cliente`;
    return this.http.post(url, { ID: clienteId }, { responseType: 'blob' });
  }
  updateCliente(id: number, activo: number): Observable<any> {
    const url = `${this.apiUrl}/api/clienteporid`;
    const body = { ID: id, Activo: activo };
    return this.http.put(url, body);
  }

  
  
}
