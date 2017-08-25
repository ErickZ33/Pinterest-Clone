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
  followObject = {
    follower: this._pinService.loggedUser,
    followee: this._pinService.viewedUser
  }
  following = false;
  
  constructor(private _pinService: PinService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentUserID = params['userID'];
    });

    this._pinService.grabUserUsingID(this.currentUserID).then(currUser => {
      this.currentUser = currUser;
      this._pinService.viewedUser = currUser;
      this.loggedIn = true;
      console.log(this._pinService.viewedUser)
      console.log(this._pinService.loggedUser)
      for (var i = 0; i < this._pinService.loggedUser.following.length; i+=1){
        if (this._pinService.loggedUser.following[i] == this._pinService.viewedUser._id){
          this.following = true;
        }
      }
    }).catch(err => console.log(err));
  }

  follow(){
    this._pinService.followUser(this.followObject).then(response => {
      this.following = true;
    }).catch(err => console.log(err));
  }

  unfollow(){
    this.following = false;
    this._pinService.unfollowUser(this.followObject).then(response => console.log(response)).catch(err => console.log(err));
  }

}
