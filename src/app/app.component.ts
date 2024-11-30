import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importa el módulo de enrutamiento
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/vehiculos">Vehículos</a>
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