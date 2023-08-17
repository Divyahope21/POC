import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.component.html',
  styleUrls: ['./hyderabad.component.css']
})
export class HyderabadComponent {
  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, private location: Location,
    private router: Router) { }

    public hotels = [];
    public hotel;
    public selectedRestaurant$ = new BehaviorSubject(null);
    
  
  ngOnInit(): void{
console.log("onint in hydrabad called")
    
    this._hotelService.getHotelsList().subscribe((data) => {
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
