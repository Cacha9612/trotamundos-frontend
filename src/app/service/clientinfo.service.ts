import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeleoDeRespuesta } from '../Models/responsemodel'
import { ClienteModel } from '../Models/clientemodel'
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientinfoService {
  private url = 'https://api.medusalashes.com.mx/clientes';
  headers = {};
  
  constructor(private http: HttpClient,
    private LoginService: LoginService) {
   }

   getToken(){
     const token = this.LoginService.getToken();
     this.headers = { 'Authorization': `Bearer ${token}`};
   }
   guardarCliente(data: ClienteModel ): Observable<ModeleoDeRespuesta>  {
    this.getToken()
    this.headers 
    return this.http.post<ModeleoDeRespuesta>(this.url+'/guardarcliente', data , {headers: this.headers});
  }
}
