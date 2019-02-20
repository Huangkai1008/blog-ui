import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ARTICLES} from './mock-articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles = ARTICLES;
  selectArticle: Article;
  columns = ['id', 'content', 'create_time', 'update_time', 'category',
    'tags'];

  constructor() {
  }

  onSelect(article: Article): void {
    this.selectArticle = article;
  }

  ngOnInit() {
  }

}
