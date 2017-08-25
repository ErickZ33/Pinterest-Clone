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

  interests = [
     'DIY and home improvment',
     'Home decor',
     'Food and drink', 
     'Technology',
     'Humor',  
     'Design',  
     'Travel',
     'Art',
     'Photography',
     'Education',
     'Recipes',
     'Memes', 
     'Life quotes', 
     'Drawing', 
     'Craft beer', 
     'Dogs', 
     'Weddings', 
     'Gardening',
     'Furniture', 
     'Architecture'
  ]

  ngOnInit() {
    this._pinService.grabUser().then(currUser => {
      this.currentUser = currUser;
      this.getBoards();
      this._pinService.retrieveUserPins(currUser).then(pins => {
        this.pins = pins.pins;
      }).catch(err => console.log(err));
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

}
