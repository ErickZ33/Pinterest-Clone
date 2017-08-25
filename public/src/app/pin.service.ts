import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class PinService {

  constructor(private _http: Http) { }

  grabUserUsingID(userID){
    return this._http.post('/api/grabUserUsingID', {'userID':userID}).map(data => data.json()).toPromise();    
  }

  addUserInterest(interest) {
    return this._http.post('/api/addUserInterest', {'interest':interest}).map(data => data.json()).toPromise();
  }

  checkEmail(user) {
    return this._http.post('/api/checkEmail', user).map(data => data.json()).toPromise();
  }

  sendUser(user) {
    return this._http.post('/api/register', user).map(data => data.json()).toPromise();
  }

  login(user) {
    return this._http.post('/api/login', user).map(data => data.json()).toPromise();
  }

  grabUser() {
    return this._http.get('/api/getCurrentUser').map(data => data.json()).toPromise();
  }

  sendUrl(url) {
    var context = {
      myUrl: url.address
    }
    return this._http.post('/api/imageOptions', context).map(data => data.json()).toPromise();
  }

  grabUrls() {
    return this._http.get('/api/imageGrab').map(data => data.json()).toPromise();
  }

  retrieveBoards(){
    return this._http.get('/api/boards').map(data => data.json()).toPromise();
  }

  sendPin(pin){
    return this._http.post('/api/createPin', pin).map(data => data.json()).toPromise();
  }

  retrievePins(){
    return this._http.get('/api/pins').map(data => data.json()).toPromise();
  };

  retrieveUserPins(user){
    return this._http.post('/api/retrieveUserPins', user).map(data => data.json()).toPromise();    
  }

  retrievePin(id){
    var context = {
      id: id
    }
    return this._http.post('/api/singlepin', context).map(data => data.json()).toPromise();
  };

  grabUserPins() {
    return this._http.get('/api/grabUserPins').map(data => data.json()).toPromise();    
  }

}
