import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  template: 
     `<div id="menu">Todo component</div>`,
   styles: [
     'header {height: 25px; background-color: silver}',
     '#menu { float: left; width: 20%; background-color: yellow }'
   ]
})

export default class TodoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}