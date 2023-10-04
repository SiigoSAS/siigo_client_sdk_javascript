import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-left-sidebar",
  templateUrl: "./left-sidebar.component.html",
  styleUrls: ["./left-sidebar.component.scss"]
})
export class LeftSidebarComponent {
  invoiceOptions: boolean = true;

  constructor(public _router: Router) {}

}
