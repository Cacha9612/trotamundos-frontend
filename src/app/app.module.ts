import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
 // Aquí es donde se importa HttpClientModule
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppComponent  
  ],
 
})
export class AppModule {}
