import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './components/sidenavbar/barra-lateral/barra-lateral.component';
import { ClientesComponent } from './components/sidenavbar/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { PdvComponent } from './components/sidenavbar/pdv/pdv.component';
import { ProductosComponent } from './components/sidenavbar/productos/productos.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

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
