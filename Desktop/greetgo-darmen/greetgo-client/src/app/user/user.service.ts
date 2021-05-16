import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {User} from "./user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpService: HttpClient) { }

  login(user : User){
    console.log(user.password)
    let body: {} = JSON.stringify(user);
    const url = 'http://localhost:8080/login'
    const options: {} = {headers: {'Content-Type' : 'application/json'}, responseType: 'text'}
    return this._httpService.post(url, body, options)
  }
}
