import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricoCheck } from './historico.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoricocheckService {
  private apiUrl = 'http://3.140.158.80:5080/api/obtenerchecklists';

  constructor(private http: HttpClient) {}

  getHistoricocheck(): Observable<HistoricoCheck[]> {
    return this.http.get<HistoricoCheck[]>(this.apiUrl);
  }
}
