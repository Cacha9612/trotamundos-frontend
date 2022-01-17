import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientinfoComponent } from './components/clientinfo/clientinfo.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'clientas',
    component:ClientinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

