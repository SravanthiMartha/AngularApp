import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {RoutingAModule} from './dashboard.routing'
import ArticleComponent from '../article/article.omponent';
import CarouselComponent from '../carousel/carousel.component';
import DashboardComponent from './dashboard.component';
import TodoComponent from '../todo/todo.component';

import {TopnavComponent } from './topnav/topnav.component';
import SidenavComponent from './sidenav/sidenav.component';
import {FooterComponent} from './footer/footer.component';
@NgModule({
  imports: [
    RouterModule,
    RoutingAModule,
    CommonModule
  ],
  declarations: [
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ArticleComponent,
    CarouselComponent,
    DashboardComponent,
    TodoComponent
  ]
})
export class DashboardModule {}