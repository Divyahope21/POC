import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  invalidCredentials: boolean=false;

 constructor(private router: Router) {
  
 }
  onSubmit() {
    if (this.username === 'divya' && this.password === '1234') {
      // Successful login logic
      console.log("success");
      this.router.navigate(['/shops'])
    } else {
      // Failed login logic, show error messages
      console.log("error");
      this.invalidCredentials=true;
    }
  }
  goBack(){
    console.log("home clicked");
    this.router.navigate(['/home'])
  }

 }

