import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteHomeComponent } from './components/cliente-home/cliente-home.component';
import { FacturaHomeComponent } from './components/factura-home/factura-home.component';
import { HomeProductosComponent } from './components/home-productos/home-productos.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch:'full'
  },
  {
    path: 'productos',
    component: HomeProductosComponent
  },
  {
    path: 'clientes',
    component: ClienteHomeComponent
  },
  {
    path: 'facturas',
    component: FacturaHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
