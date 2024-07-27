import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Article, NewsApiResponse } from './news.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NewsComponent implements OnInit {
  articles!: Article[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe((data: NewsApiResponse) => {
      console.log(data);
      this.articles = data.articles;
    });
  }
}
