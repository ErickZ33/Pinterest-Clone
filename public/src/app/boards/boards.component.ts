import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor() { }
  board={name:""}

  newBoard(){
    console.log(this.board.name,"hello")
  }

  ngOnInit() {

  }

  addBoard(){
    console.log("this board works")
  }

}
