import {Injectable} from '@angular/core'
import {UserService} from '../../users/user.service'
import {NgRedux} from 'ng2-redux';
import {IAppState} from '..'

export const USER_REGISTERED='users/Register';
export const USER_LOGGED_IN='users/LOGIN';
export const USER_LOGOUT='users/LOGOUT'
export const USER_PROFILE='users/PROFILE'

@Injectable()
export class UserActions{
  constructor(
    private usersService:UserService,
    private ngRedux:NgRedux<IAppState>
  ){}

  register(user){
    this.usersService
      .register(user)
      .subscribe(result=>{
        this.ngRedux.dispatch({
          type:USER_REGISTERED,
          result
        })
      })
  }

  login(user){
    this.usersService
      .login(user)
      .subscribe(result=>{
        this.ngRedux.dispatch({
          type:USER_LOGGED_IN,
          result
        })
      })
  }

  logout(){
    this.ngRedux.dispatch({
      type:USER_LOGOUT
    })
  }



}
