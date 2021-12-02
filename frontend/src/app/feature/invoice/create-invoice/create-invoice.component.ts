import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { PaymentTypesService } from 'src/app/services/payment-types.service';
import { Subscription } from 'rxjs';
import { PaymentType } from '@core/models/payment-type.interface';
import { DocumentType } from '@core/models/document-type.interface';
import { filter, map, tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';


export interface PeriodicElement {
  product: string;
  description: string;
  amount: number;
  price: string;
  discount:string;
  taxes:string;
  total:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {product: '1', description: 'Hydrogen', amount: 1.0079, price: 'H',discount:'2',taxes:'er',total:'0.00'},

];

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})


export class CreateInvoiceComponent implements OnInit, OnDestroy {
  paymentTypes: PaymentType[] = [];
  documentTypes: DocumentType[] = [];
  customers: [];
  sellers: [];
  products: [];
  displayedColumns: string[] = ['product', 'description', 'amount', 'price', 'discount', 'taxes','total'];
  dataSource = ELEMENT_DATA;

  paymentTypesSub: Subscription;
  documentTypesSub: Subscription;
  customersSub: Subscription;
  sellerSub: Subscription;
  productSub: Subscription;

  constructor(private _paymentTypeService: PaymentTypesService,
              private _documentTypeService: DocumentTypesService,
              private _customerService: CustomerService,
              private _userService: UsersService,
              private _productsService: ProductsService
              ) { }

  ngOnInit(): void {
    this.paymentTypesSub = this._paymentTypeService.getPaymentTypes().subscribe(payments => {
      this.paymentTypes = payments;
    });

    this.documentTypesSub = this._documentTypeService.getDocumentTypes().subscribe(documents => {
      this.documentTypes = documents;
    });
  }

  selectCustomer(customerSelected){
    console.log(customerSelected);
  }

  selectSeller(sellerSelected){
    console.log(sellerSelected);
  }

  getSuggestionCustomer() {
    this.customersSub = this._customerService
      .getCustomers()
      .pipe(
        map((data) => data.results.filter((el) => (el.name))),
        map((data) => data.map(el => ({ id: el.id, value: el.name[0] }))),
      )
      .subscribe((data) => {
        this.customers = data.slice(0, 3);
      });
  }

  getSuggestionSeller() {
    this.sellerSub = this._userService
      .getSellers()
      .pipe(
        map((data) => data.results),
        map((data) => data.map(el => ({ id: el.id, value: `${el.username} - ${el.first_name}`}))),
        tap(console.log)
      )
      .subscribe((data) => {
        this.sellers = data.slice(0, 3);
      });
  }

  ngOnDestroy(): void{
    this.paymentTypesSub.unsubscribe();
    this.documentTypesSub.unsubscribe();
    this.customersSub.unsubscribe();
    this.sellerSub.unsubscribe();
  }

  getSuggestionProducts(){
    this.productSub = this._productsService.getProducts()
    .pipe(
      map((data) => data.results),
      map((data) => data.map(el => ({ id: el.code, value: `${el.code} - ${el.name}`}))),
      tap(console.log)
    )
    .subscribe((data) => {
      this.products = data.slice(0, 3);
    });
  }
}
