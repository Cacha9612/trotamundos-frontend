import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './components/sidenavbar/barra-lateral/barra-lateral.component';
import { ClientesComponent } from './components/sidenavbar/clientes/clientes.component';
import { PdvComponent } from './components/sidenavbar/pdv/pdv.component';
import { ProductosComponent } from './components/sidenavbar/productos/productos.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { AdminGuard } from '../../admin.guard';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PromocionesComponent } from './components/sidenavbar/promociones/promociones.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AdminGuard],
    component: SidenavbarComponent,
    children: [
      { path: 'pdv', component: PdvComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'barra-lateral', component: BarraLateralComponent },
      { path: 'promociones', component: PromocionesComponent}
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
