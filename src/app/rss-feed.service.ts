import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsItem } from './news-item.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RssFeedService {
  private rssFeedUrl: string =environment.corsProxy + encodeURIComponent(environment.rssFeedSource);

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<NewsItem[]> {
   return this.http.get(this.rssFeedUrl, { responseType: 'text' }).pipe(
      map((response) => this.parseRSS(response))
    );
  }

  private parseRSS(response: string): NewsItem[] {
    const newsItems: NewsItem[] = [];
    const parser = new DOMParser();
    const xml = parser.parseFromString(response, 'text/xml');
    const items = xml.querySelectorAll('item');

    items.forEach((item) => {
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const date = item.querySelector('pubDate')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';

      newsItems.push({
        title,
        link,
        date,
        description,
      });
    });

    return newsItems;
  }
}
