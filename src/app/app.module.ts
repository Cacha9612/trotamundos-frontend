import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
 // Aquí es donde se importa HttpClientModule
    RouterModule.forRoot([]),
    AppComponent  
  ],
 
})
export class AppModule {}
