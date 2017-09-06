import {Component } from '@angular/core'
import {LoginUserModel} from './login-user.module'
import {UserActions} from '../store/users/users.actions'

import {Router} from '@angular/router'

import {IAppState} from '../store'
import {NgRedux} from 'ng2-redux'
import {AuthService} from "../core/auth.service";


@Component({
  selector:'login',
  templateUrl:'./login.component.html'
})

export class LoginComponent{
  user:LoginUserModel=new LoginUserModel()

  constructor(
    private usersActions:UserActions,
    private authService:AuthService,
    private router:Router,
    private ngRedux:NgRedux<IAppState>
  ){}

  login(){
this.usersActions.login(this.user);
  this.ngRedux
    .select(state=>state.users)
    .subscribe(users=>{
      if(users.userAuthenticated){
        console.log(users)
        this.authService.authenticateUser(users.token)
        this.authService.saveUser(users.username)
        this.router.navigateByUrl('')
      }
    })
  }
}
