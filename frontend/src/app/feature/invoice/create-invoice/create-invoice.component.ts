import { Component, OnInit } from '@angular/core';


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

export class CreateInvoiceComponent implements OnInit {

  displayedColumns: string[] = ['product', 'description', 'amount', 'price', 'discount', 'taxes','total'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
