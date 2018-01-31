import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
   styleUrls: ['./sidenav.component.css']
})

export default class SidenavComponent implements OnInit {
 menuItems = [
   {
        path: 'article',
        title: 'Article',
        icon: 'dashboard',
        class: ''
    }, 
    {
        path: 'carousel',
        title: 'Carousel',
        icon: 'dashboard',
        class: ''
    },
    {
      path: 'todo',
      title: 'todo',
      icon: 'dashboard',
      class: ''
  }
  ]
  constructor() {
  }

  ngOnInit() {

  }

}