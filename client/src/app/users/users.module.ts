import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProfileComponent} from './profile.component'

import {UserActions} from '../store/users/users.actions'

import {LoginComponent} from './login.component'

import {FormsModule} from '@angular/forms'
import {UserService} from'./user.service'





import {RegisterComponent} from './register.component'

@NgModule({
  declarations:[RegisterComponent,LoginComponent,ProfileComponent],
  providers:[UserService,UserActions],
  imports:[FormsModule,CommonModule]
})
export class UsersModule{}
