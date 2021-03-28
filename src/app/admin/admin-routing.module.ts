import { AuthGuard } from './../../@core/guards/Authguard';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "admin", component: AdminComponent,children:[
    { path: "add_product", component: AddProductComponent , canActivate:[AuthGuard]},

  ] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
