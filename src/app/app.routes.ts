import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HistoricoCheckComponent } from './historicocheck/historicocheck.component';
import { FlotillasComponent } from './flotillas/flotillas.component';
import { ReporteventasComponent } from './reporteventas/reporteventas.component';
import { ReporteVentasVistaComponent } from './reporteventasvista/reporteventasvista.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'historicocheck', component: HistoricoCheckComponent },
  { path: 'flotillas', component: FlotillasComponent },
  { path: 'reporteventas', component: ReporteventasComponent },
  { path: 'reporteventasvista', component: ReporteVentasVistaComponent },
];
