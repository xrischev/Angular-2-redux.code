import {NgModule} from '@angular/core'

import {CommonModule} from '@angular/common'

import {RouterModule} from '@angular/router'
import {HttpService} from '../core/http.service'
import {NavbarComponent} from './navbar-component'
import {MessageHandlerComponent} from './message.handler.component'
import {AuthService} from './auth.service'
import {PrivateRouter} from './private.route'

@NgModule({
declarations:[NavbarComponent,MessageHandlerComponent],
  imports:[
    CommonModule,
    RouterModule],
  providers:[HttpService,AuthService,PrivateRouter],
  exports:[NavbarComponent,MessageHandlerComponent]
})

export class CoreModule{}
