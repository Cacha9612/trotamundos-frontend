import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importa el módulo de enrutamiento
  template: `
   <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/vehiculos" routerLinkActive="active">Vehículos</a>
    <a routerLink="/clientes" routerLinkActive="active">Clientes</a>
    <a routerLink="/ordenservices" routerLinkActive="active">Orden de Servicio</a>
    <a routerLink="/checklist" routerLinkActive="active">Checklist</a>
    <a routerLink="/servicio" routerLinkActive="active">Checklist Servicio</a>
    <a routerLink="/historicocheck" routerLinkActive="active">Checklist Histórico</a>
    <a routerLink="/flotillas" routerLinkActive="active">Flotillas</a>
    <a routerLink="/reporteventas" routerLinkActive="active">Formulario de Ventas</a>
    <a routerLink="/reporteventasvista" routerLinkActive="active">Reporte de Ventas</a>
  </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        margin: 1em;
      }
      a {
        margin-right: 1em;
        text-decoration: none;
      }
    `,
  ],
})
export class AppComponent {
  title = 'TrotamundosWeb';  // Definir la propiedad 'title'
}