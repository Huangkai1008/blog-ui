import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

const routes: Routes = [
  {path: 'articles', component: ArticleComponent},
  {path: 'articles/:id', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
