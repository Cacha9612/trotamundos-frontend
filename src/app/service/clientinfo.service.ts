import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeleoDeRespuesta } from '../Models/responsemodel'
import { ClienteModel, PromocionModel, ClientesInfo, UsuariosInfo, ClienteVisita } from '../Models/clientemodel'
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
  getpromociones(): Observable<PromocionModel[]> {
    this.getToken()
    this.headers
    return this.http.get<PromocionModel[]>('https://api.medusalashes.com.mx'+'/promocion?id_estatus=0', {headers: this.headers})
  }

  getclientes(): Observable<ClientesInfo[]> {
    this.getToken()
    this.headers
    return this.http.get<ClientesInfo[]>(this.url, {headers: this.headers})
  }

  async getCliente(Usuario: string): Promise<ClientesInfo> {
    this.getToken()
    this.headers
    return await this.http.get<ClientesInfo>(`https://api.medusalashes.com.mx/clientes/getcliente?usuariocliente=${Usuario}`,{headers: this.headers}).toPromise()
  }

  getUsersInfo(): Observable<UsuariosInfo[]> {
    return this.http.get<UsuariosInfo[]>(`https://api.medusalashes.com.mx/seguridad/getusers`,{headers: this.headers})
  }

  guardarVisita(data: ClienteVisita): Observable<ModeleoDeRespuesta>{
    this.getToken()
    this.headers
    return this.http.post<ModeleoDeRespuesta>('https://api.medusalashes.com.mx/clientes/registravisita', data , {headers: this.headers});
  }
}
