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
    <a routerLink="/checklist" routerLinkActive="active">Checklist</a>
    <a routerLink="/servicio" routerLinkActive="active">Checklist Servicio</a>
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