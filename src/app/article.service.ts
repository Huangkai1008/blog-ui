import {Injectable} from '@angular/core';
import {Article} from './article/article';
import {ARTICLES} from './article/mock-articles';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {
  }


  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticle(id: number): Observable<Article> {
    return of(ARTICLES.find(article => article.id === id));
  }
}
