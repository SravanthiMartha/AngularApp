import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html'
  
})
export class LoginComponent {
    userName = '';
    password = '' ;
    constructor(private r: Router){
        
    }
    gotodashboard(){
        console.log("hello")
        if(this.userName === 'test' && this.password === 'test'){
            console.log("inside hello")
           this.r.navigate(['./dashboard']);
        }

    }
 
}
