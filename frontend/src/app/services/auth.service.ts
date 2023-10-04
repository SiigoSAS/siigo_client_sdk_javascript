import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthInterface } from "../feature/auth/interfaces/auth-interface";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  env: string;

  constructor(private _http: HttpClient, private _router: Router) {
    this.env = environment.apiEndpoint;
  }

  login(user: AuthInterface) {
    return this._http.post<any>(this.env + "auth", user);
  }
}
