import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { VehiculosService } from './vehiculos.service';  // El servicio sigue en NgModule

@NgModule({
   
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([])], // Solo importamos lo necesario
  providers: [VehiculosService],

})
export class AppModule {}
