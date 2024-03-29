﻿import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService, private _router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // extract error message from http body if an error occurs
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        if (errorResponse instanceof HttpErrorResponse) {
          switch (errorResponse.status) {
            case 401: // login
              if(errorResponse.error?.message?.Authentication){
                this.toastrService.error(errorResponse.error?.message.error, errorResponse.error?.message.Authentication);
              } else {
                this.toastrService.error("Invalid username or access_key", "Authentication failed");
              }
              
              this._router.navigate([""]);
              break;
            case 400: // forbidden
              // show server bad request message
              this.toastrService.error(errorResponse.error?.message);
              break;
          }
        }

        return throwError(() => errorResponse.error);
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
