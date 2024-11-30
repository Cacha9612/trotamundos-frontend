import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
];
