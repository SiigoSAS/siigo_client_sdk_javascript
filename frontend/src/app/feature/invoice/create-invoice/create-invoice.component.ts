import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { PaymentTypesService } from 'src/app/services/payment-types.service';
import { Subscription } from 'rxjs';
import { PaymentType } from '@core/models/payment-type.interface';
import { DocumentType } from '@core/models/document-type.interface';
import { filter, map, tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';


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
  
  displayedColumns: string[] = ['product', 'description', 'amount', 'price', 'discount', 'taxes','total'];
  dataSource = ELEMENT_DATA;

  paymentTypesSub: Subscription;
  documentTypesSub: Subscription;

  constructor(private _paymentTypeService: PaymentTypesService,
              private _documentTypeService: DocumentTypesService,
              private _customerService: CustomerService) { }

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

  getSuggestionCustomer() {
    this._customerService
      .getCustomers()
      .pipe(
        map((data) => data.results.filter((el) => (el.name))),
        map((data) => data.map(el => el.name)),
        map((data) => data.map(el => el[0]),
      ))
      .subscribe((data) => {
        this.customers = data.slice(0, 3);
      });
  }

  ngOnDestroy(): void{
    this.paymentTypesSub.unsubscribe();
    this.documentTypesSub.unsubscribe();
  }

  onAdd(){}

}
