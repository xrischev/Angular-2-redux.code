import {Injectable} from '@angular/core'

import {NgRedux} from 'ng2-redux';
import {IAppState} from '..'

import {CarService} from '../../cars/cars.service'



export const ADD_CAR='cars/ADD'
export const ALL_CARS='cars/ALL'
export const CAR_DETAILS='cars/DETAILS'
export const CAR_LIKE='cars/LIKE';
export const CAR_ADD_REVIEW='cars/ADD_REVIEW'
export const CAR_ALL_REVIEWS='cars/ALL_REVIEWS'
export const CAR_DELETE='cars/DELETE'
export const MINE_CARS='cars/MINE'



@Injectable()
export class CarsActions{


  constructor(
    private carsService:CarService,
    private ngRedux:NgRedux<IAppState>
  ){}

  addCar(car){
    this.carsService
      .addCar(car)
      .subscribe(result=>{
        this.ngRedux.dispatch({
          type:ADD_CAR,
          result
        })
      })
  }

  allCars(page=1,search=null){
    this.carsService
      .allCars(page,search)
      .subscribe(cars=>{
        this.ngRedux.dispatch({
          type:ALL_CARS,
          cars
        })
      })
  }

  details(id){
    this.carsService
      .details(id)
      .subscribe(car=>{
        this.ngRedux.dispatch({
          type:CAR_DETAILS,
          car
        })
      })
  }

  like(id){
    this.carsService
      .like(id).subscribe(result=>{

      this.ngRedux.dispatch({
        type:CAR_LIKE,
        result
      });
    });
  }

  submitReview(id,review){
    this.carsService
      .submitReview(id,review)
      .subscribe(result=>{

        this.ngRedux.dispatch({
          type:CAR_ADD_REVIEW,
          result
        })
      })
  }

  allReviews(id){
    this.carsService
      .allReviews(id)
      .subscribe(reviews=>{
        this.ngRedux.dispatch({
          type:CAR_ALL_REVIEWS,
          reviews
        })
      })
  }

  delete(id){
    this.carsService
      .delete(id)
      .subscribe(result=>{
        console.log(result)
        this.ngRedux.dispatch(({
          type:CAR_DELETE,
          result,id
        }))
      })

  }

  mine(){
    this.carsService
      .mine()
      .subscribe(cars=>{
      this.ngRedux.dispatch({
        type:MINE_CARS,
        cars
      });
    });
  }
}
