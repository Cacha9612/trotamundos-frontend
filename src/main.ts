import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment.prod';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Si tienes rutas definidas en otro archivo
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // Asegúrate de que las rutas estén configuradas correctamente
  ],
}).catch((err) => console.error(err));
