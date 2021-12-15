import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeleoDeRespuesta, AccessToken } from 'src/app/Models/responsemodel';
import { DatosLogin } from 'src/app/Models/loginmodel';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://medusa-api:5080/seguridad/iniciarsesion'
  constructor(
    private http: HttpClient
  ) { }

  iniciodesesion(data: DatosLogin){
    return this.http.post<AccessToken>(this.url, data);
  }
}
