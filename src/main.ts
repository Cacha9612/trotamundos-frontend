import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import {environment} from './enviroments/environments.prod';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Define las rutas en un archivo separado

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configuración de rutas
    provideHttpClient(),   // HttpClient para peticiones HTTP
  ],
}).catch((err) => console.error(err));

