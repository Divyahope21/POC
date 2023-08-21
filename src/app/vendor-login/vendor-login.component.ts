import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent {
  username: string = '';
  password: string = '';
  loginForm: any;

  loginFormValue: any={
   id: '',
    username: '',
    password: ''
  };
  storedVendors:any[]=[];
  showShops: boolean;
  selectedVendorShops: any[];
  newDish: any;
  selectedShop: any;
 
  constructor(private router: Router,private snackBar: MatSnackBar) {
    const storedVendorsString=localStorage.getItem('vendors');
    this.storedVendors=storedVendorsString?JSON.parse(storedVendorsString):[];
  }
  showLogin: boolean = true;
  showRegistration: boolean = false;
  newVendor: any = {
    id: '',
    username: '',
    password: '',
    shopName: ''
  };
 
  login() {
    console.log("login clicke",this.loginFormValue);
    if ( !this.loginFormValue.id || !this.loginFormValue.username || !this.loginFormValue.password ) {
      this.snackBar.open('Please provide all details', 'Dismiss', {
        duration: 3000,
      });
      return;

    }
    else{
      console.log("logging in")
       
        }
    // Get stored vendor credentials from local storage
    const storedVendors = JSON.parse(localStorage.getItem('vendors') );
    console.log('stored vendors',storedVendors)
 
    const foundVendor = storedVendors.find(
      (vendor: any) => {
        return vendor.id===this.loginFormValue.id && 
        vendor.username === this.loginFormValue.username && 
        vendor.password === this.loginFormValue.password
      });
 
    if (foundVendor) {
      console.log("login success")
      this.snackBar.open('Login successful', 'Dismiss', {
        duration: 2000,
      });
      // Redirect to vendor dashboard or desired route
    
        this.router.navigate(['/shop-details']);

      
    
    } else {
      console.log("login fail")
      this.snackBar.open('Login failed', 'Dismiss', {
        duration: 3000,
      });
    }
  }


  registerVendor() {
    if (!this.newVendor.id || !this.newVendor.username || !this.newVendor.password || !this.newVendor.shopName) {
      this.snackBar.open('Please provide all details', 'Dismiss', {
        duration: 3000,
      });
      return;
    }
    // const newVendor = {
    //   id: 1234,
    //   username: 'vendor123',
    //   password: 'password123'
    // };
    console.log("registerd vendor",this.newVendor)

    const foundVendor = this.storedVendors.find((vendor:any)=>{
      return vendor.id===this.newVendor.id;
    });
    if (foundVendor){
      this.snackBar.open('vendor ID is already taken','Dismiss',{
        duration:5000});
      
      return;
    }
    if (foundVendor){
      this.snackBar.open('user is already registered','Dismiss',{
        duration:5000});
      
      return;
    }
    this.storedVendors.push(this.newVendor);
    localStorage.setItem('vendors',JSON.stringify(this.storedVendors));

    // Get existing vendors from local storage or initialize an empty array
   
    this.showLogin=true;
    this.showRegistration=false;
    this.snackBar.open('Vendor registered successfully', 'Dismiss', {
      duration: 3000,
    });
  
   
   }
   showRegistrationForm(){
    this.showLogin=false;
    this.showRegistration=true;
   }

  //  showShopDetails(vendor: any[]) {
  //   this.showLogin = false;
  //   this.showRegistration = false;
  //   this.showShops = true;
 
  //   this.selectedShop = vendor;
  // }
  // addDish() {
  //   console.log("dish")
  //   if (!this.newDish.dishName || !this.newDish.price || !this.newDish.quantity) {
  //     this.snackBar.open('Please provide all dish details', 'Dismiss', {
  //       duration: 3000,
  //     });
  //     return;
  //   }
 
  //   if (!this.selectedShop.dishes) {
  //     this.selectedShop.dishes = []; // Initialize if not already
  //   }
 
  //   this.selectedShop.dishes.push(this.newDish);
 
  //   // Update local storage with the modified shop details
  //   const updatedVendors = this.storedVendors.map((vendor: any) => {
  //     if (vendor.id === this.selectedShop.id) {
  //       return this.selectedShop;
  //     }
  //     return vendor;
  //   });
 
  //   localStorage.setItem('vendors', JSON.stringify(updatedVendors));
 
  //   this.newDish = {}; // Clear the newDish object
  // }
 
 

}
