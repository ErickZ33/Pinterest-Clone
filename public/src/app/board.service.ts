import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoardService {

  constructor(private _http: Http) { }

  addBoard(board){
    // console.log(board,"service")
    return this._http.post('/newBoard',board)
    .map(data => data.json())
    .toPromise();
  }
  showBoards(){
    return this._http.get('/showBoards')
    .map(data => data.json())
    .toPromise();
  }
  deleteBoard(id){
    // console.log(id,"service")
    return this._http.post('/deleteBoard',id)
    .map(data => data.json())
    .toPromise();
  }
}
