import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ChecklistComponent } from './checklist/checklist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'checklist', component: ChecklistComponent },
];
