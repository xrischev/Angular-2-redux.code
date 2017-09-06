import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {StatsModule} from './stats/stats.module'

import {CarsModule} from './cars/cars.module'

import {Router,NavigationStart} from '@angular/router'

import {USER_LOGGED_IN} from './store/users/users.actions'

import {UsersModule} from './users/users.module'
import {CarRoutesModule} from './routes.module'
import {CoreModule} from './core/core.module'

import {NgReduxModule,NgRedux} from 'ng2-redux'
import {store,IAppState} from './store'

import { AppComponent } from './app.component';

import {ROUTES_CHANGE} from './store/core/core.actions'
import {AuthService} from "./core/auth.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    UsersModule,
    CarRoutesModule,
    StatsModule,
    CarsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux:NgRedux<IAppState>,private authService:AuthService,private router:Router){
    this.ngRedux.provideStore(store)
    this.router.events.subscribe(ev=>{
      if(ev instanceof NavigationStart){
       this.ngRedux.dispatch({
         type:ROUTES_CHANGE
       })
      }
    });

    if(this.authService.isUserAuthenticated()){
      const token=this.authService.getToken()
      const username=this.authService.getUser()

      this.ngRedux.dispatch({
        type:USER_LOGGED_IN,
        result:{
          success:true,
          token,
          user:{
            name:username
          }
        }
      });

    }
  }
}
