import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChennaiComponent {
  shops: any[] = [];
  selectedShop: any;

  ngOnInit() {
    this.loadShops();
  }

  loadShops() {
    //this.shops = shopsData;
  }

  showShopItems(shop: any) {
    this.selectedShop = shop;
  }

  

}


