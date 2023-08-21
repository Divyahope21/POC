import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}

click(){
  console.log("login")
  this.router.navigate(['/admin-login'])
}
Onguest(){
  console.log("guest clicked");
  this.router.navigate(['/shops'])
}
vendorclick(){
  console.log('Vendor Clicked');   
  this.router.navigate(['/vendor-login'])                             
}
}
