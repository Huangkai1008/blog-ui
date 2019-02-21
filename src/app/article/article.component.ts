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
  data: any[] = [];

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
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((i, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), ' +
          'to help people create their product prototypes beautifully and efficiently.'
      };
    });

  }
}
