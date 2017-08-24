import { Component, OnInit, Input } from '@angular/core';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userID
  imglogo="/assets/images/Pinterest-logo.png"

  constructor(private _pinService: PinService, private _router: Router) { }
  
  ngOnInit() {
    this.imglogo="/assets/images/Pinterest-logo.png"
  }

  getUser(){
    this._pinService.grabUser().then(currUser => {
      this.userID = currUser._id;
      this._router.navigateByUrl('/profile/' + this.userID + '/boards')
    }).catch(err => console.log(err));
  }

}
