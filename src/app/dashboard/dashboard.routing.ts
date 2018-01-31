import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ArticleComponent from '../article/article.omponent';
import CarouselComponent from '../carousel/carousel.component';
import DashboardComponent from './dashboard.component';
import TodoComponent from '../todo/todo.component';
const routes : Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'article',
        component: ArticleComponent
      }, 
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path:'todo',
        component:TodoComponent
      },
      {
        path: '',
        redirectTo: 'article',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingAModule {}