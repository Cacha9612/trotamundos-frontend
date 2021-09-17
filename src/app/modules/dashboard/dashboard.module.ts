import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './components/sidenavbar/barra-lateral/barra-lateral.component';
import { PdvComponent } from './components/sidenavbar/pdv/pdv.component';
import { ClientesComponent } from './components/sidenavbar/clientes/clientes.component';
import { ProductosComponent } from './components/sidenavbar/productos/productos.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DemoMaterialModule } from 'src/app/material-module';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './components/sidenavbar/navbar/navbar.component';
import { SidebarComponent } from './components/sidenavbar/sidebar/sidebar.component';




@NgModule({
  declarations: [
    BarraLateralComponent,
    PdvComponent,
    ClientesComponent,
    ProductosComponent,
    SidenavbarComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DemoMaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [],

})
export class DashboardModule { }
