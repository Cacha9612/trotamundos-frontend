import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styles: [],
  
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateToVehiculos() {
    this.router.navigate(['/vehiculos']);
  }
}

