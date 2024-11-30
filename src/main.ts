import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {environment} from './environments/environment.prod';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Define las rutas en un archivo separado
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Aquí usas provideHttpClient
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));

