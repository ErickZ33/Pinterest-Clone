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

  lastStep = false;
  boards;
  pins = []

  pin = {
    img: "",
    url: "",
    title: "",
    creator: "",
    description: "",
    board: ""
  }

  url = { 
    address : ""
  }

  imageList = [];

  constructor(private _pinService:PinService, private _router: Router){}
  
  ngOnInit() {
    this._pinService.grabUser().then(currUser => {
      this.currentUser = currUser;
      this.pin.creator = currUser;
      this.grabBoards();
    }).catch(err => console.log(err));
    this._pinService.grabUserPins().then(apiPins => this.pins = apiPins).catch(err => console.log(err));
  }

  grabBoards(){
    this._pinService.retrieveBoards().then(boards => this.boards = boards).catch(err => console.log(err));
  }

  gotUrl() {
    this.pin.url = this.url.address;
    this._pinService.sendUrl(this.url).then(response => { 
      this.imageList = response;
      this.imageOptions = true;
    }).catch(err => console.log(err));
  }

  chooseImg(link){
    this.pin.img = link;
    this.imageOptions = false;
    this.lastStep = true;
  }

  createPin() {
    this._pinService.sendPin(this.pin).then(response => {
      this.pin = {img: "", url: "", title: "", creator: "", description: "", board: ""};
      this._router.navigateByUrl('/profile/boards');
    }).catch(err => console.log(err)); 
  }

}
