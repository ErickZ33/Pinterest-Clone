import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pins = [];
  constructor(private _pinService:PinService, private _router: Router){}


  ngOnInit() {
    this.populatePins();
  }

  populatePins(){
      this._pinService.retrievePins().then(pins => this.pins = pins).catch(err => console.log(err));
  }

}
