import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentType } from '@core/models/document-type.interface';
import { PaymentType } from '@core/models/payment-type.interface';
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { PaymentTypesService } from 'src/app/services/payment-types.service';
import { Subscription } from 'rxjs';

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

  paymentTypesSub: Subscription;
  documentTypesSub: Subscription;


  constructor(private _paymentTypeService: PaymentTypesService,
              private _documentTypeService: DocumentTypesService) { }

  ngOnInit(): void {
    this.paymentTypesSub = this._paymentTypeService.getPaymentTypes().subscribe(payments => {
      this.paymentTypes = payments;
    });

    this.documentTypesSub = this._documentTypeService.getDocumentTypes().subscribe(documents => {
      this.documentTypes = documents;
    });
  }

  ngOnDestroy(): void{
    this.paymentTypesSub.unsubscribe();
    this.documentTypesSub.unsubscribe();
  }

}
