import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Checklist } from './checklist.interface';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  private apiUrl = 'http://3.140.158.80:5080/api/obtenerchecklists';

  constructor(private http: HttpClient) {}

  getChecklists(): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(this.apiUrl);
  }
}
