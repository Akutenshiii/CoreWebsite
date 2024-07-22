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
  private rssFeedUrl: string =
    environment.corsProxy + encodeURIComponent(environment.rssFeedSource);

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<NewsItem[]> {
    return this.http
      .get(this.rssFeedUrl, { responseType: 'text' })
      .pipe(map((response) => this.parseRSS(response)));
  }

  private parseRSS(response: string): NewsItem[] {
    const newsItems: NewsItem[] = [];
    // Remove any injected scripts or unwanted content using regex
    // const cleanResponse = response.replace(/<script[\s\S]*?<\/script>/gi, '');

    const cleanResponse ='<channel>' +
      response.split('<channel>')[1].split('</channel>')[0] + '</channel>'; // Quick and dirty fix
    const parser = new DOMParser();

    try {
      const xml = parser.parseFromString(cleanResponse, 'text/xml');
      const items = xml.querySelectorAll('item');

      const parseError = xml.querySelector('parsererror');
      if (parseError) {
        console.error('Error parsing XML:', parseError.textContent);
        throw new Error(`Error parsing XML: ${parseError.textContent}`);
      }

      // Use a for loop instead of forEach to ensure synchronous processing
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const date = item.querySelector('pubDate')?.textContent || '';
        const description =
          item.querySelector('description')?.textContent || '';

        newsItems.push({
          title,
          link,
          date,
          description,
        });
      }
    } catch (error) {
      console.error('Error parsing RSS feed:', error);
    }

    return newsItems;
  }
}
