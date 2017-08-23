import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;

  constructor(private _pinService:PinService, private _router: Router){}
  
  ngOnInit() {
    this._pinService.grabUser().then(currUser => {
      this.currentUser = currUser;
      console.log(this.currentUser);
    }).catch(err => console.log(err));    
  }
  
}
