import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PdvComponent } from './pdv/pdv.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'pdv',
    component:PdvComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
