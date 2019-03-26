import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from 'app/layouts/admin/admin-layout.component';
import { ProductoComponent } from './producto.component';
import { PrimeroComponent } from './primero/primero.component';


export const routes: Routes = [
  {
  path: '',
      component: ProductoComponent,
      /*data: {paginas: [33]},
      canActivate: [AuthGuardService],*/
      children: [
        {
            path: 'primero',
            component: PrimeroComponent,
            //canActivate: [AuthGuardService],
            //component:HomeComponent
        }]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
