import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  template: 
     `<div id="menu">This is article component</div>`,
   styles: [
     'header {height: 25px; background-color: silver}',
     '#menu { float: left; width: 20%; background-color: yellow }'
   ]
})

export default class ArticleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}