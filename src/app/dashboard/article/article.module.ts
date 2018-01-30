import {NgModule} from '@angular/core';

import {ArticleComponent} from './article.component';
import {ArticleRoutingModule} from './article.routing';
@NgModule({
  imports: [
    ArticleRoutingModule
  ],
  declarations: [ArticleComponent],
  providers: [],
})
export class ArticleModule {
}
