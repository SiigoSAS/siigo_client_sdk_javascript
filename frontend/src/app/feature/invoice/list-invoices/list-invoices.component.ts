import { Component, OnInit, ViewChild } from "@angular/core";
import { InvoiceService } from "src/app/services/invoice.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { CustomerService } from "../../../services/customer.service";
import { MatPaginator } from "@angular/material/paginator";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { forkJoin, of } from "rxjs";
import { ListInvoiceViewModel } from "../models/list-invoice-view-model.interface";
import { MatDialog } from '@angular/material/dialog';
import { InvoicePdfComponent } from "../invoice-pdf/invoice-pdf.component";

@Component({
  selector: "app-list-invoices",
  templateUrl: "./list-invoices.component.html",
  styleUrls: ["./list-invoices.component.scss"]
})
export class ListInvoicesComponent implements OnInit {
  listInvoice: ListInvoiceViewModel[] = [];
  displayedColumns: string[] = ["paymentType", "documentName", "date", "customerIdentification", "customerName", "totalPrice"];
  dataSource = new MatTableDataSource<ListInvoiceViewModel>();
  opts: any = { page: 1, pageSize: 100 };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _invoiceService: InvoiceService, 
              private _customerService: CustomerService, 
              private _router: Router,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.chargeInvoice();
  }

  chargeInvoice() {
    this._invoiceService
      .getInvoices(this.opts)
      .pipe(
        switchMap((res: any) => {
          const { results } = res;
          const array = results.map((item) => {
            return this._customerService.getCustomer(item.customer.id).pipe(
              map((r) => {
                const name = r.name[0];
                return {
                  id: item.id,
                  paymentType: item.payments[0].name,
                  documentName: item.name,
                  date: item.date,
                  customerIdentification: item.customer.identification,
                  customerName: name,
                  totalPrice: item.total
                };
              })
            );
          });
          return forkJoin(array);
        }),
        tap(console.log),
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      )
      .subscribe((res) => {
        this.dataSource.data = res;
      });
  }
  openPDF(id: string) {
    // this._router.navigate([`invoice/${id}`])
    const dialog = this._dialog.open(InvoicePdfComponent, {
      data: id,
      width: '90%'
    });
  }
}
