import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Board } from "../board";
import { PinService } from '../pin.service';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards;
  boardid={content:""}
  constructor(private _pinService:PinService,private _boardService:BoardService){}
  boardView=false
  board=new Board()
  currentUser

  newBoard(){
    this.board._userid=this.currentUser[0]._id
    this._boardService.addBoard(this.board)
  }
  
  
  showBoards(){
    this._boardService.showBoards()
    .then(data => this.boards = data)
    .catch(err => console.log(err));
  }
  delete(id){
    this.boardid.content=id
    this._boardService.deleteBoard(this.boardid)
  }

  ngOnInit() {
   this._pinService.grabUser().then(currUser => this.currentUser = currUser).catch(err => console.log(err));
  this._boardService.showBoards()
    .then(data => this.boards = data)
    .catch(err => console.log(err));
  }



}
