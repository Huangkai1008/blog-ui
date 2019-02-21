import {Injectable} from '@angular/core';
import {Article} from './article/article';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ErrorHandler} from './utils/error-handler';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends ErrorHandler {

  private articlesUrl = 'http://127.0.0.1:4000/api/v1/articles';

  constructor(
    private http: HttpClient
  ) {
    super();
  }


  getArticles(): Observable<Article[]> {
    // 获得文章列表
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        catchError(this.handlerError<Article[]>('获得文章列表', []))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url)
      .pipe(
        catchError(this.handlerError<Article>(`获得id为${id}的文章`))
      );
  }
}
