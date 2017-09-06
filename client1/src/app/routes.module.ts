import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core'
import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component'
import {AddCarComponent} from './cars/add.car.component'
import {PrivateRouter} from "./core/private.route";
import {StatsComponent} from './stats/stats.component'

import {ProfileComponent} from './users/profile.component'

import {ListCarComponent} from './cars/list-cars.component'
import {CarDetailsComponent} from './cars/cars-details.component'

const routes:Routes=[
  {path:'',component:StatsComponent},
  {path:'users/register',component:RegisterComponent},
  {path:'users/login',component:LoginComponent},
  {path:'cars/add',component:AddCarComponent,canActivate:[PrivateRouter]},
  {path:'cars/all',component:ListCarComponent},
  {path:'cars/details/:id',component:CarDetailsComponent},
  {path:'users/profile',component:ProfileComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class CarRoutesModule{}
