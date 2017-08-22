import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  imageOptions = false;
  currentUser

  url = { 
    address : ""
  }

  imageList = [];
  constructor(private _pinService:PinService, private _router: Router){}
  
  ngOnInit() {
    this._pinService.grabUser().then(currUser => this.currentUser = currUser).catch(err => console.log(err));    
  }

  gotUrl() {
    console.log(this.url);
    this._pinService.sendUrl(this.url).then(response => { 
      this.imageList = response;
      console.log("in component:");
      console.log(this.imageList);
      this.imageOptions = true;
    }).catch(err => console.log(err));
  }

  grabImages(){
    this._pinService.grabUrls().then(response => {
      this.imageList = response;
      this.imageOptions = true;
    }).catch(err => console.log(err)); 
  }
}
