import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { ShopsComponent } from './shops/shops.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { NoidaComponent } from './noida/noida.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'shops', component: ShopsComponent},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chennai', component: ChennaiComponent },
  { path: 'hyderabad', component:HyderabadComponent },
  { path: 'bangalore', component:BangaloreComponent },
  { path: 'Noida', component:NoidaComponent },
   {path : '', component : LoginComponent},
   {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }