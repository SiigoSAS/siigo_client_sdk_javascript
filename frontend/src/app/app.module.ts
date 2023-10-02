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
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';




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
