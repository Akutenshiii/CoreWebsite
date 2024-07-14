import { Component, OnInit } from '@angular/core';
import { RssFeedService } from 'app/rss-feed.service'; 
import { NewsItem } from 'app/news-item.model'; 

@Component({
  selector: 'app-Home',
  templateUrl: 'Home.page.html',
  styleUrls: ['Home.page.scss']
})
export class HomePage implements OnInit {
  news: NewsItem[] = [];

  constructor(private rssFeedService: RssFeedService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.rssFeedService.fetchNews().subscribe((data) => {
      this.news = data;
    });
  }
}