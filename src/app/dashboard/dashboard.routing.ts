import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ArticleComponent } from './article/article.component';
import {TodoComponent} from './todo/todo.component';
const routes: Routes = [
  { path: '', 
    component: DashboardComponent, 
    children:[
      { path: '', component: ArticleComponent },
      {
        path: '**',
        redirectTo: 'article',
        pathMatch: 'full'
      },
      { path: 'todo', component: TodoComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent];