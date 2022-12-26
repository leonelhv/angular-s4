import { Component, EventEmitter, Input, Output } from '@angular/core';
import { article } from '../interfaces/article.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  @Input() articles!: article[];
  @Output() titleArticle = new EventEmitter<string>();

  deleteArticle(title: string) {
    this.titleArticle.emit(title);
  }
}
