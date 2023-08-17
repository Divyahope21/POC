import { Component, OnInit } from '@angular/core';
import { BangaloreComponent } from '../bangalore/bangalore.component';
import { NoidaComponent } from '../noida/noida.component';
import { ServiceService } from '../service/service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  selectedRestaurant: any;
  list:any;
  bangaloreComponent:BangaloreComponent
  noidaComponent: NoidaComponent
  menu:any;
  displayedColumns: string[] = ['id', 'name', 'desc', 'price','Actions'];
  name: any;
  // constructor(bangaloreComponent:BangaloreComponent){
  // this.selectedRestaurantObservable = bangaloreComponent.selectedRestaurant$.asObservable();
  // this.selectedRestaurantObservable.subscribe(
  //   value => {
  //     console.log(value);
  //     this.list= value;
  //   }
  // )

  //}
  constructor(_hotelService: ServiceService,private dialog: MatDialog) {
    this.selectedRestaurant= _hotelService.selectedRestaurant$.getValue();
    // const value: restaurantDetails = {
    //   id: 232,
    //   name: 
    // }
    this.menu = this.selectedRestaurant.menu;
    console.log(this.menu)
  }

deleteItem(card:any):void{
  console.log(card);
  const dialogRef = this.dialog.open(DeleteComponent, {
    width: '2000px',
    data: { cardname: card.name}, 
  }
 
  );
  dialogRef.afterClosed().subscribe(result => {
  if (result) {
    // Perform the delete action
    // Implement your delete logic here
  }
});

}
editItem(item:any):void{
  
}
// dialogRef.afterClosed().subscribe(result => {
//   if (result) {
//     // Perform the delete action
//     // Implement your delete logic here
//   }
// });


}

