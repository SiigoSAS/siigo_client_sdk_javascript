import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  hide = true;
  authData: any;
  message: string='';

  getErrorMessage() {
    return this.username.hasError('username') ? 'Not a valid username' : '';
  }
  constructor(private _authService: AuthService, private _router:Router) {
    this.authData={};
   }

  ngOnInit(): void {  }

  login(){
    if(!this.authData.username || !this.authData.access_key){
      this.authData={};
    }else{      
      this._authService.login(this.authData).subscribe(
        (res)=>{
          console.log(res);          
          this._router.navigate(['/list-invoices'])  
        },
        (err)=>{
          console.log(err);          
        }
      )
    }

  }



}
