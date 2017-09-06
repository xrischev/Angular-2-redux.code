import {NgModule} from '@angular/core'
import {AddCarComponent} from './add.car.component'
import {FormsModule} from '@angular/forms'

import {ListCarComponent} from './list-cars.component'

import {CommonModule} from '@angular/common'

import {CarsActions} from '../store/cars/cars.actions'

import {CarService} from './cars.service'

import {RouterModule} from '@angular/router'
import {CarDetailsComponent} from './cars-details.component'

import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations:[AddCarComponent,ListCarComponent,CarDetailsComponent,HighlightDirective],
  providers:[CarsActions,CarService],
  imports:[FormsModule,CommonModule,RouterModule]
})
export class CarsModule{}
