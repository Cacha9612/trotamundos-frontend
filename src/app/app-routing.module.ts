import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './sidenavbar/barra-lateral/barra-lateral.component';
import { ClientesComponent } from './sidenavbar/clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { PdvComponent } from './sidenavbar/pdv/pdv.component';
import { ProductosComponent } from './sidenavbar/productos/productos.component';
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
