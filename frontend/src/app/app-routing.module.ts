import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateCustomerComponent } from './feature/customer/create-customer/create-customer.component';
import { CreateInvoiceComponent } from './feature/invoice/create-invoice/create-invoice.component';
import { CreateProductComponent } from './feature/product/create-product/create-product.component';
import { AuthComponent } from './feature/auth/auth.component';
import { ListInvoicesComponent } from './feature/invoice/list-invoices/list-invoices.component';
import { InvoicePdfComponent } from "./feature/invoice/invoice-pdf/invoice-pdf.component";



const routes: Routes = [
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
  {
    path: 'list-invoices',
    component:
      ListInvoicesComponent,
    pathMatch: 'full'
  },
  {
    path: 'invoice/:invoiceId',
    component:
    InvoicePdfComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledNonBlocking",
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
