import { Component } from "@angular/core";
import { UntypedFormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { AuthInterface } from "./interfaces/auth-interface";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
  username = new UntypedFormControl("", [Validators.required]);
  hide = true;
  authData: AuthInterface;
  message: string = "";

  getErrorMessage() {
    return this.username.hasError("username") ? "Not a valid username" : "";
  }
  constructor(private _authService: AuthService, private _router: Router) {
    this.authData = { username: "", access_key: "" };
  }

  login() {
    if (!this.authData.username || !this.authData.access_key) {
      this.authData = { username: "", access_key: "" };
      // show error
      return;
    }

    this._authService.login(this.authData).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(["/list-invoices"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
