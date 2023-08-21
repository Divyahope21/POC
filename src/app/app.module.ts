import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
//import {MatSnackBarConfig} from '@angular/material/snack-bar'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ShopsComponent } from './shops/shops.component';
import {MatChipsModule} from '@angular/material/chips';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoidaComponent } from './noida/noida.component';
import { BangaloreComponent } from './bangalore/bangalore.component'; 
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { HttpClientModule } from '@angular/common/http';
import { ChennaiComponent } from './chennai/chennai.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
// import { MockApiService } from './service/mock-api.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ShopsComponent,
    ChennaiComponent,
   // ChennaiComponent,
    NoidaComponent,
    BangaloreComponent,
    HyderabadComponent,
    ListComponent,
    DeleteComponent,
   EditComponent,
   HomeComponent,
   AdminLoginComponent,
   VendorLoginComponent,
   ShopDetailsComponent    
   
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(MockApiService),
    
 
    
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],

  bootstrap: [AppComponent]
})
export class AppModule { }