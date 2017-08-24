import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-single-pin',
  templateUrl: './single-pin.component.html',
  styleUrls: ['./single-pin.component.css']
})
export class SinglePinComponent implements OnInit {

  pinID;
  pinfo;
  pin;
  creator;

  constructor(private _pinService: PinService, private _router: Router, private _route: ActivatedRoute) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.pinID = params['pinID'];
      console.log(this.pinID);
    });
    this.grabPin();
  }

  grabPin(){
    this._pinService.retrievePin(this.pinID).then(response => { 
      this.pinfo= response;
      this.pin = this.pinfo.pin;
      this.creator = this.pinfo.user;
      console.log(this.pinfo);
    }).catch(err => console.log(err));
  }

}
