import { Component, OnInit } from '@angular/core';
import { PinService } from '../pin.service';


@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  gender = false
  register = true
  user = {
    email: '',
    password: '',
    name: '',
    gender: '',
    age: ''
  }
  valid = []

  constructor(private _PinService:PinService){}
  
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

  addUser(){
    console.log(this.user)
    this._PinService.addUser(this.user).then(user => this.valid = user).catch(err => console.log(err));    
  }

}
