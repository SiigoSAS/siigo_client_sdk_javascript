import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../../../services/customer.service';


@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.scss']
  
})
export class ListInvoicesComponent implements OnInit {
  listInvoice:any;
  displayedColumns: string[] = ['paymentTypes', 'name', 'date', 'identification','customername','total'];
  dataSource : any=[];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private _invoiceService : InvoiceService,private _customerService:CustomerService, private _router:Router) { 
    this.listInvoice={}
  }

  ngOnInit(): void {
    this._invoiceService.getInvoices().subscribe(
      (res)=>{ 
        this.dataSource = res.results;
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
