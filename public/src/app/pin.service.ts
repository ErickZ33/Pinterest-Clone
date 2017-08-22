import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PinService {

  constructor(private _http: Http) { }
  
  addUser(user) {
    return this._http.post('/api/createUser', user).map(data => data.json()).toPromise()
  }

}
