import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';

import {TopnavComponent } from './topnav/topnav.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {FooterComponent} from './footer/footer.component';
import {ArticleComponent} from './article/article.component';
import {TodoComponent} from './todo/todo.component';
@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent, 
    ArticleComponent,
    TodoComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent
    ],
  providers: [],
})
export class DashboardModule {
}
