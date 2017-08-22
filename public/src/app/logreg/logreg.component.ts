import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  gender = false
  register = true
  emailPassword = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {

  }
  onSubmit(){
    this.gender = true
    this.register = false
  }

  goBack(){
    this.gender = false
    this.register = true
  }

}
