import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  currentUserID
  currentUser;
  loggedIn = false
  loggedUser;
  
  constructor(private _pinService: PinService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentUserID = params['userID'];
    });

    this._pinService.grabUserUsingID(this.currentUserID).then(currUser => {
      this.currentUser = currUser;
      this._pinService.viewedUser = currUser;
      this.loggedIn = true;
    }).catch(err => console.log(err));
  }

}
