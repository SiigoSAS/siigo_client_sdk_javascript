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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface invoice {
  product: string;
  description: string;
  amount: string;
  price: string;
  discount:string;
  taxes:string;
  total:string;
}

const ELEMENT_DATA: invoice[] = [
  {product: '', description: '', amount:'', price: '',discount:'',taxes:'',total:''},

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
  form: FormGroup;

  paymentTypesSub: Subscription;
  documentTypesSub: Subscription;
  customersSub: Subscription;
  sellerSub: Subscription;
  productSub: Subscription;

  constructor(private _paymentTypeService: PaymentTypesService,
              private _documentTypeService: DocumentTypesService,
              private _customerService: CustomerService,
              private _userService: UsersService,
              private _productsService: ProductsService,
              private _fb: FormBuilder
              ) {
  }

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
        map((data) => data.map(el => ({ id: el.id, value: `${el.identification} - ${el.name[0]}` }))),
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
    this.productSub.unsubscribe();
  }

  onAdd(){}

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
