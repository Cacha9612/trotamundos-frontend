import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeleoDeRespuesta } from '../Models/responsemodel'
import { ClienteModel } from '../Models/clientemodel'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientinfoService {
  private token: any;
  private url = 'https://api.medusalashes.com.mx/clientes';
  headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmRyZXMiLCJleHAiOjE2NDU0MjY0Mzh9.F6-cVpFO_EDK-6g_uVuzWymm_ttewkdcUbYmlFjCnvk'};
  
  constructor(private http: HttpClient) {
    
   }

   guardarCliente(data: ClienteModel ): Observable<ModeleoDeRespuesta>  {
    console.log("peticion a api")
    return this.http.post<ModeleoDeRespuesta>('http://127.0.0.1:8000/clientes/guardarcliente', data , {headers: this.headers});
  }
}
