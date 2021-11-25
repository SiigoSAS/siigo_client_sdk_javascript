import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "@core/core.module";
import { CreateInvoiceComponent } from './feature/invoice/create-invoice/create-invoice.component';
import { AuthComponent } from './feature/auth/auth.component';
import { CreateCustomerComponent } from './feature/customer/create-customer/create-customer.component';
import { CreateProductComponent } from './feature/product/create-product/create-product.component';

@NgModule({
  declarations: [AppComponent, CreateInvoiceComponent, AuthComponent, CreateCustomerComponent, CreateProductComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
