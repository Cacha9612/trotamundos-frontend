import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { is } from 'date-fns/locale';
import { Observable } from 'rxjs';
import { LoginService } from './components/login/login.service'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private Service : LoginService,
    public router: Router
  ){
  }
  canActivate(): boolean {
    if (!this.Service.isAuthenticated()) {
      this.router.navigate(['**']);
      return false;
    }
    return true;
  }
  
}
