import { Component, OnInit, ViewChild } from "@angular/core";
import { InvoiceService } from "src/app/services/invoice.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { CustomerService } from "../../../services/customer.service";
import { MatPaginator } from "@angular/material/paginator";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { forkJoin, of } from "rxjs";

@Component({
  selector: "app-list-invoices",
  templateUrl: "./list-invoices.component.html",
  styleUrls: ["./list-invoices.component.scss"]
})
export class ListInvoicesComponent implements OnInit {
  listInvoice: any;
  displayedColumns: string[] = ["paymentTypes", "name", "date", "identification", "customername", "total"];
  dataSource = new MatTableDataSource();
  opts: any = { page: 1, pageSize: 10 };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _invoiceService: InvoiceService, private _customerService: CustomerService, private _router: Router) {
    this.listInvoice = {};
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
                return { ...item, customer: { ...item.customer, name } };
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
}
