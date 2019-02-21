import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Article} from '../article/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  columns = ['id', 'content', 'create_time', 'update_time', 'category',
    'tags'];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap);
    this.getArticle();
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticle(Number(id))
        .subscribe(article => this.article = article);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
