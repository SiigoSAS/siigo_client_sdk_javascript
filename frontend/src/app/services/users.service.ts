import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.apiEndpoint;
  }

  getSellers(){
    return this._http.get<any>(this.env + "users/");
  }
}
