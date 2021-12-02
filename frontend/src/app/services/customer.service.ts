import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.apiEndpoint;
  }

  getCustomer(id: string) {
    return this._http.get<any>(this.env + "customer/" + id);
  }

  getCustomers() {
    return this._http.get<any>(this.env + "customer/");
  }
}
