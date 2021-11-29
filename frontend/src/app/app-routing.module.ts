import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards";
import { CreateCustomerComponent } from './feature/customer/create-customer/create-customer.component';
import { CreateInvoiceComponent } from './feature/invoice/create-invoice/create-invoice.component';
import { CreateProductComponent } from './feature/product/create-product/create-product.component';
import { AuthComponent } from './feature/auth/auth.component';

const routes: Routes = [
  // {
  //   path: "",
  //   loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  // },
  // {
  //   path: "contacts",
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import("./feature/contact/contact.module").then((module) => module.ContactModule)
  // },
  {
    path: '',
    component:
      AuthComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-customer',
    component:
      CreateCustomerComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-invoice',
    component:
      CreateInvoiceComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-product',
    component:
      CreateProductComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      relativeLinkResolution: "legacy"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
