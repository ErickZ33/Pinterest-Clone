import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imglogo="/assets/images/Pinterest-logo.png"
  constructor() { }

  ngOnInit() {
    this.imglogo="/assets/images/Pinterest-logo.png"
  }

}
