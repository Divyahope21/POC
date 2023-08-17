import { Component, OnInit } from '@angular/core';
//import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { events } from '@material/tooltip';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import {  Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css']
})
export class ChennaiComponent implements OnInit  {
  
  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
    private router: Router,private location: Location) { }

    public hotels = [];
    public hotel;
    public selectedRestaurant$ = new BehaviorSubject(null);
    
  
  ngOnInit(): void{
console.log("onint in chennai called")
    
    this._hotelService.getHostelChennai().subscribe((data) => {
     console.log("data",data)
      this.hotels = data;
      this.route.paramMap.subscribe((params: ParamMap) => {
       // [this.hotel] =  this.getHotel(parseInt(params.get('id')));
      })
    });


  }
  getHotel(card){
    console.log("cards", card);
    this.selectedRestaurant$.next(card);
    this._hotelService.selectedRestaurant$.next(card);
    this.router.navigate(['/list']);

  }
  
/*
   getHotel = (id: number) => {
    try {
      return this.hotels.filter((hotel) => hotel.id == id);
    }
    catch(e) {
      console.log(e);
    }
  }
  }*/
  openHelp(): void{}
  openContact(): void{
    this.router.navigate(['/login'],{queryParams:{logout:'success'}});

}
goBack(): void{
  this.location.back();
}
}
 
