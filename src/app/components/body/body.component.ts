import { Component, Input } from '@angular/core';
import { article } from '../interfaces/article.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  @Input() articles!: article[];

  addArticle(article: article) {
    this.articles = [...this.articles, article];
    console.log(this.articles);
  }
  deleteArticle(title: string) {
    this.articles = this.articles.filter((art) => art.title !== title);
  }
}
