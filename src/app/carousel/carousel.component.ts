import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: 
     `<div id="menu">Carousel component</div>`,
   styles: [
     'header {height: 25px; background-color: silver}',
     '#menu { float: left; width: 20%; background-color: yellow }'
   ]
})

export default class CarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}