import { Component, OnInit } from '@angular/core';
import { BangaloreComponent } from '../bangalore/bangalore.component';
import { ServiceService } from '../service/service.service';
import { Menu, restaurantDetails } from 'src/shared/restaurant.details';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  selectedRestaurant: any;
  list:any;
  bangaloreComponent:BangaloreComponent
  menu:any;
  displayedColumns: string[] = ['id', 'name', 'desc', 'price'];
  // constructor(bangaloreComponent:BangaloreComponent){
  // this.selectedRestaurantObservable = bangaloreComponent.selectedRestaurant$.asObservable();
  // this.selectedRestaurantObservable.subscribe(
  //   value => {
  //     console.log(value);
  //     this.list= value;
  //   }
  // )

  //}
  constructor(_hotelService: ServiceService) {
    this.selectedRestaurant= _hotelService.selectedRestaurant$.getValue();
    // const value: restaurantDetails = {
    //   id: 232,
    //   name: 
    // }
    this.menu = this.selectedRestaurant.menu;
    console.log(this.menu)
  }




}
