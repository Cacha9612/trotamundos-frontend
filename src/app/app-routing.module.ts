import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { PdvComponent } from './pdv/pdv.component';
import { ProductosComponent } from './productos/productos.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'pdv',component:PdvComponent},
  {path:'productos',component:ProductosComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'barra-lateral',component:BarraLateralComponent},
  {path:'sidenavbar', component:SidenavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
