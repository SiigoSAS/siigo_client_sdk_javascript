import { Component, OnInit,ViewChild } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../../../services/customer.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.scss']
  
})
export class ListInvoicesComponent implements OnInit {
  listInvoice:any;
  displayedColumns: string[] = ['paymentTypes', 'name', 'date', 'identification','customername','total'];
  dataSource : any=[];
  opts:any={page:1,pageSize:10};
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
    
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private _invoiceService : InvoiceService,private _customerService:CustomerService, private _router:Router) { 
    this.listInvoice={}
  }

  ngOnInit(): void {
    this.chargeInvoice();
  }

  chargeInvoice(){
    this._invoiceService.getInvoices(this.opts).subscribe(
      (res)=>{      
        this.dataSource = res['results'] ;
        for (let index = 0; index < this.dataSource.length; index++) {
          this._customerService.getCustomer(this.dataSource[index].customer.id).subscribe(
            (res)=>{
              this.dataSource[index].customer.name=res.name[0];
                          
            },(err)=>{
              console.log(err);            
            }
          )                
        }              
      },
      (err)=>{
        console.log(err);        
      }
    )
  }

}
