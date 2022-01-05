import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService {

  token: any;
  constructor(
    public JWTHelper: JwtHelperService
  ) { }

  public IsAuthenticated(): boolean {
    try {
    this.token = localStorage.getItem('ACCESS_TOKEN');
    } catch (error) {
    localStorage.setItem('ACCESS_TOKEN', '');
    }
    let pass: boolean;
    try {
    pass = this.JWTHelper.isTokenExpired(this.token)
    } catch (error) {
    pass = true;
    }
    return !pass;
    }
    
}
