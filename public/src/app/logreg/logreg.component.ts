import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';


@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  users
  // user = new User()  
  exists = false;
  registered = false;
  pwError = false;
  emailError = false;
  onlyPW = false;
  login;

  constructor(private _pinService:PinService, private _router: Router){}


  ngOnInit(){
    this.getUsers();
    this.login = {email: '', password: ''}
  }
  
  getUsers() {
    this._pinService.retrieveUsers()
      .then(users => this.users = users)
      .catch(err => console.log(err));
  }

  // createUser(){
  //   this.exists = false;
  //   for (let i in this.users) {
  //     if (this.users[i].email == this.user.email){
  //       this.exists = true;
  //       this.user = new User();
  //     }
  //   }
  //   if (!this.exists) {
  //     this._pinService.sendUser(this.user).then(response => console.log (response)).catch(err => console.log(err));
  //     this.user = new User();
  //     this.getUsers();
  //   }
  // }

  loginUser(){
    this.registered = false;
    this.pwError = false;
    this.emailError = false;
    this.onlyPW = false;
    for (let i in this.users) {
      if (this.users[i].email == this.login.email){
        if (this.users[i].password == this.login.password) {
          this.registered = true;
        } else {
          this.pwError = true;
          this.onlyPW = true;
        }
      }
    }
    if (this.registered){
      this._pinService.login(this.login).then(response => {
        this._router.navigateByUrl('/dashboard');
      }).catch(err => console.log(err));
    } else if (this.onlyPW) {
      this.emailError = false;
    } else {
      this.emailError = true;
    }
  }

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
    this._pinService.sendUser(this.user).then(user => this.valid = user).catch(err => console.log(err));    
  }

}
