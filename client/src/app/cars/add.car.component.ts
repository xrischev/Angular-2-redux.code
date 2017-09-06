import {Component} from '@angular/core';
import {AddCarModel} from './add-car.model'

import {IAppState} from '../store'
import {NgRedux} from 'ng2-redux'

import {Router} from '@angular/router'

import {CarsActions} from '../store/cars/cars.actions'

@Component({
  selector:'add-car',
  templateUrl:'./add-car.component.html'
})

export class AddCarComponent{
  car:AddCarModel=new AddCarModel();

  constructor(
    private ngRedux:NgRedux<IAppState>,
    private router:Router,
    private carsActions:CarsActions
  ){}

  addCar(){
    this.carsActions.addCar(this.car);

    let subscription=this.ngRedux
      .select(state=>state.cars)
      .subscribe(cars=>{
        if(cars.carAdded){
          const carId=cars.carAddedId
          subscription.unsubscribe()
          this.router.navigateByUrl(`/cars/details/${carId}`)
        }
      })
  }
}
