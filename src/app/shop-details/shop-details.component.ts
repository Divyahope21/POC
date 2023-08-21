import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent {
  selectedVendor: any; // Hold the selected shop details

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit() {
    // Get the selected shop details from the route parameters
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Assuming you're passing shop id as a parameter
      const vendorsFromLocalStorage=JSON.parse(localStorage.getItem('vendors'));
      console.log('vendor id:',id)
      console.log('vendor from LS:',vendorsFromLocalStorage)
      this.selectedVendor=vendorsFromLocalStorage.find((vendor:any)=>vendor.id===id);
      if(!this.selectedVendor){
        console.error('vendor not found');
      }
    });
  }
 

}
