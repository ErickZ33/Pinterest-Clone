import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards;
  addPinBoard;
  pins = [];
  constructor(private _pinService:PinService, private _router: Router,private _boardService:BoardService){}
  currentUser;
  addProcess={postid:"",boardid:""}
  logged = false

  ngOnInit() {
    this._pinService.grabUser().then(currUser => {
      this.currentUser = currUser;
      this.populatePins();
      this.getBoards();
      this.logged = true;
    }).catch(err => console.log(err));
  }

  pinAdding(pin){
    this.addPinBoard=pin;
  }
  addToBoard(board,pin){
  this.addProcess.postid=pin
  this.addProcess.boardid=board
  this._boardService.addToBoard(this.addProcess)
  }

  getBoards(){
    this._boardService.showBoards(this.currentUser)
      .then(data => this.boards = data)
      .catch(err => console.log(err));
  }

  populatePins(){
      this._pinService.retrievePins().then(pins => this.pins = pins).catch(err => console.log(err));
  }

}
