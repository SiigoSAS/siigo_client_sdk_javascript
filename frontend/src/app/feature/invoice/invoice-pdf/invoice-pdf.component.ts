import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import {MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.scss']
})
export class InvoicePdfComponent implements OnInit {
  id: any = "";
  constructor(private _activeRoute: ActivatedRoute, 
              private _invoiceService: InvoiceService,
              public dialogRef: MatDialogRef<InvoicePdfComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }
  isCharging: boolean = true;

  ngOnInit(): void {
    // this.id = this._activeRoute.snapshot.params.invoiceId;
    this.id = this.data;
    console.log(this.id);
    
    this._invoiceService.getInvoicePDF(this.id).subscribe(
      (res) => {
        console.log("Get it!");
        this.isCharging = false;
        let doc = document.getElementById("pdf")

        var obj = document.createElement('object');
        obj.style.width = '100%';
        obj.style.height = '100vh';
        obj.type = 'application/pdf';
        obj.data = 'data:application/pdf;base64,' + res.base64;
        doc.appendChild(obj)
      },
      (err) => {
        console.log(err);  
      } 
    );
  }

}
