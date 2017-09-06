import {Component,OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import {CarsActions} from '../store/cars/cars.actions'
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store'

import {CarReviewModel} from './car-review.model'


@Component({
  selector:'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{
car:object={}
private carId:number
  reviews:Array<object>=[]

  classGreen:string=''

  review:CarReviewModel=new CarReviewModel(5)

  constructor(
    private route:ActivatedRoute,
    private carsActions:CarsActions,
    private ngRedux:NgRedux<IAppState>
  ){}

ngOnInit(){
  this.route.params
    .subscribe(params=>{
      const id=params['id'];
      this.carsActions.details(id);
      this.carsActions.allReviews(id);
      this.ngRedux
        .select(state=>state.cars)
        .subscribe(cars=>{
          this.car=cars.carDetails;
          this.reviews=cars.carReviews
        })

    })



}

  like(){
  this.carsActions.like(this.car['id'])
    this.classGreen='classlike'
  }

  submitReview(){
    this.carsActions.submitReview(this.car['id'],this.review);
  }
}
