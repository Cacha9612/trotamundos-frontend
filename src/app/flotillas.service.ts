import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flotillas } from './flotillasinterface'

@Injectable({
  providedIn: 'root',
})
export class FlotillasService {
  private apiUrl = 'http://3.140.158.80:5080/api/obtenerallflotillas';

  constructor(private http: HttpClient) {}

  getFlotilla(): Observable<Flotillas[]> {
    return this.http.get<Flotillas[]>(this.apiUrl);
  }
}
