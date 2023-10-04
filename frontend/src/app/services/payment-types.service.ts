import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaymentType } from "@core/models/payment-type.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PaymentTypesService {
  env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.apiEndpoint;
  }

  getPaymentTypes(): Observable<PaymentType[]>{
    return this._http.get<PaymentType[]>(`${this.env}/payment-types/FV`)
    .pipe(map((response) => response.filter((paymentType) => paymentType.active == true)));
  }
}
