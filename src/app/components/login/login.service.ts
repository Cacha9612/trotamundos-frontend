import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessToken } from 'src/app/Models/responsemodel';
import { DatosLogin } from 'src/app/Models/loginmodel';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authSubject = new BehaviorSubject(false);
  private token: any;
  private url = 'https://api.medusalashes.com.mx/seguridad/iniciarsesion';
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  iniciodesesion(data: DatosLogin): Observable<AccessToken> {
    return this.http.post<AccessToken>(this.url, data).pipe(
      tap((res: AccessToken) => {
        if (res) {
          this.SaveToken(res.access_token, res.token_type)
        }
      })
    );
  }
  private SaveToken(token: string, expiresIn: string): void {
    // localStorage.setItem('ACCESS_TOKEN', token);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
  public isAuthenticated(): boolean {
    // const tokenn = localStorage.getItem('ACCESS_TOKEN') || '{}';
    // return !this.jwtHelper.isTokenExpired(tokenn);
    if (!this.token){
      return false
    }
    else {
      return true
    }
  }

  
}
