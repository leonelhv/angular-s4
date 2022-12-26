import { Component } from '@angular/core';
import { article } from 'src/app/components/interfaces/article.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  articles: article[] = [
    {
      img: 'assets/img/deer.jpg',
      title: 'Deer',
      text: 'Naturalist investigation',
    },
    {
      img: 'assets/img/squirrel.jpg',
      title: 'Squirrel',
      text: 'Kamikaze squirrels',
    },
    {
      img: 'assets/img/bird.jpg',
      title: 'Deer',
      text: 'Birds Fight club',
    },
  ];
}
