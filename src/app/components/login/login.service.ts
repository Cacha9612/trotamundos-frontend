import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeleoDeRespuesta } from 'src/app/Models/responsemodel';
import { DatosLogin } from 'src/app/Models/loginmodel';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://127.0.0.1:8000/seguridad/iniciarsesion'
  constructor(
    private http: HttpClient
  ) { }

  iniciodesesion(data: DatosLogin){
    return this.http.post<ModeleoDeRespuesta>(this.url, data);
  }
}
