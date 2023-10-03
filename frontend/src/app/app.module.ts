import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// COMPONENTS
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "@core/core.module";
import { CreateInvoiceComponent } from './feature/invoice/create-invoice/create-invoice.component';
import { AuthComponent } from './feature/auth/auth.component';
import { CreateCustomerComponent } from './feature/customer/create-customer/create-customer.component';
import { CreateProductComponent } from './feature/product/create-product/create-product.component';

//ANGULAR MATERIAL COMPONENTS
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';




//SERVICE COMPONENTS
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListInvoicesComponent } from './feature/invoice/list-invoices/list-invoices.component';
import { LeftSidebarComponent } from './feature/home/left-sidebar/left-sidebar.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { InvoicePdfComponent } from './feature/invoice/invoice-pdf/invoice-pdf.component';


import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [AppComponent, CreateInvoiceComponent, AuthComponent, CreateCustomerComponent, CreateProductComponent, ListInvoicesComponent, LeftSidebarComponent, InvoicePdfComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    CoreModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatDialogModule,
    NgHttpLoaderModule.forRoot(),


  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
