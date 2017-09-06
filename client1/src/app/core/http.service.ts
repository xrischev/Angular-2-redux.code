import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'

import 'rxjs/add/operator/map'

import {AuthService} from './auth.service';

const baseUrl='http://localhost:5000/'

@Injectable()
export class HttpService{
  constructor(
    private http:Http,
    private authService:AuthService
  ){}

  get(url,authenticated=false){

    const requestOptions=this.getRequestOptions('get',authenticated)

    return this.http
      .get(`${baseUrl}${url}`,requestOptions)
      .map(res=>res.json())
  }

  post(url,data,authenticated=false){

    const requestOptions=this.getRequestOptions('post',authenticated)

    return this.http
      .post(`${baseUrl}${url}`,JSON.stringify(data),requestOptions)
      .map(res=>res.json())
  }

  private getRequestOptions(method,authenticated){
    const headers=new Headers();

    if(method !=='get'){
      headers.append('Content-Type','application/json')
    }

    if(authenticated){
      headers.append('Authorization',`bearer ${this.authService.getToken()}`)
    }


    const requestOptions=new RequestOptions({
      headers:headers
    })

    return requestOptions;
  }
}
