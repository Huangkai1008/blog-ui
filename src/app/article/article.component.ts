import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  selectArticle: Article;

  constructor(
    private articleService: ArticleService
  ) {
  }

  onSelect(article: Article): void {
    this.selectArticle = article;
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);

  }

  add(title: string, content: string): void {
    this.articleService.addArticle({title, content} as Article)
      .subscribe(article => {
        this.articles.push(article);
      });
  }


  ngOnInit() {
    this.getArticles();
  }

}
