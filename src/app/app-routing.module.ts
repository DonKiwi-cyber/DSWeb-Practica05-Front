import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'venta', component: VentaComponent, pathMatch: "full"},
  {path: 'cliente', component: ClienteComponent, pathMatch: "full"},
  {path: 'producto', component: ProductoComponent, pathMatch: "full"},
  {path: 'auth/login', component: LoginComponent, pathMatch: "full"},
  {path: 'auth/register', component: RegisterComponent, pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
