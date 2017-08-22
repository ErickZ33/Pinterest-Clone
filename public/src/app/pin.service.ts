import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class PinService {

  constructor(private _http: Http) { }

  retrieveUsers(){
    return this._http.get('/api/users').map(data => data.json()).toPromise();
  }

  checkEmail(user){
    return this._http.post('/api/checkEmail', user).map(data => data.json()).toPromise();    
  }

  sendUser(user){
    return this._http.post('/api/register', user).map(data => data.json()).toPromise();
  }

  login(user){
    return this._http.post('/api/login', user).map(data => data.json()).toPromise();
  }

  grabUser(){
    return this._http.get('/api/getCurrentUser').map(data => data.json()).toPromise();
  }

}
