import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // currentUser;

  currentUser=
  { _id: "599c766623ee7e78017ec7c1",
  updated_at: "2017-08-22T18:22:30.191Z",
  created_at: "2017-08-22T18:22:30.191Z",
  name: 'Julian Auza',
  age: 25,
  gender: 'custom',
  email: 'julianauza@gmail.com',
  password: 'Codingdojod1',
  __v: 0,
  boards: [],
  interests: [],
  following: [],
  followers: [] }

  constructor(private _pinService:PinService, private _router: Router){}
  
  ngOnInit() {
    // this._pinService.grabUser().then(currUser => {
    //   this.currentUser = currUser;
    // }).catch(err => console.log(err));    
  }
  
}
