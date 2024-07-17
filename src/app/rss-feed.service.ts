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
  private rssFeedUrl: string = environment.rssFeedSource;

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<NewsItem[]> {
    // Uncomment this block to use mock data
  /* const mockResponse = `
       <rss version="2.0">
         <channel>
           <title>Core Consultants Inc - CA(SA)DotNews</title>
           <item>
             <title>July 2024 | 7 Effective Business Lessons Inspired by Madiba </title>
             <link>https://www.dotnews.co.za/Code/online.aspx?qry=yKPR5eDKNlaukY9Ps7iCg1bFq31prMmNjV0Kc2LmHx7tfrTJURS-VWTtDo807Z8dlI7oXbPOw5GnXR5YIewaAayBB2czI9DvLogMIRPROXk=-NOPAD</link>
             <pubDate>01 July 2024</pubDate>
             <description>In just a few days, on 18 July, the world will commemorate Nelson Mandela Day, dedicated to honour our Tata, Madiba, known for his great leadership skills and his ability to inspire people around the world to greater heights.&amp;nbsp;Mandela also left us with some really effective lessons that can inspire and encourage business owners and entrepreneurs in these uncertain times. In this article, we highlight 7 important business lessons inspired by Madiba&amp;rsquo;s wisdom.&amp;nbsp;Nobody wants to go t...</description>
           </item>
           <item>
             <title>June 2024 | Use This SARS Incentive to Bring Young People into Your Business</title>
             <link>https://www.dotnews.co.za/Code/online.aspx?qry=yKPR5eDKNlaukY9Ps7iCgy93rEt2zhEnEpYOorgThjRY90lJdauGjaGk5z-xB9vxSNGwrZdAcuk5No96U6fDHVu6-of8FUp920txuinYiTM=-NOPAD</link>
             <pubDate>01 June 2024</pubDate>
             <description>Youth Day, celebrated on 16 June each year, is an ideal opportunity for businesses to look at ways of bringing fresh young talent into their teams to unlock a myriad of business benefits.&amp;nbsp;One way of doing so is by utilising the Employment Tax Incentive or ETI for short, an incentive provided by SARS to encourage employers to hire young work seekers. Our team can help you take advantage of this incentive and to unlock the benefits of having young workers in your business.With businesses i...</description>
           </item>
           <item>
             <title>May 2024 | Your Employer Annual Declaration is Due by 31 May </title>
             <link>https://www.dotnews.co.za/Code/online.aspx?qry=yKPR5eDKNlaukY9Ps7iCgxBUpskpOlZ6I5nN3GlTETSOn6DiETxtbru8VKhlA7ZMY-IbgbnB_CGgZzuPMHYnJdi0ixgwFru53RKNKMCSd5A=-NOPAD</link>
             <pubDate>01 May 2024</pubDate>
             <description>Employers have only until 31 May 2024 to submit their Annual Reconciliation Declarations for the period 1 March 2023 to 29 February 2024. This is a focus area for the South African Revenue Service (SARS), not just to ensure employer compliance, but also because it ultimately enables SARS to issue individual taxpayers with income tax auto-assessments.&amp;nbsp;Non-submission or late submission of declarations, and the submission of incorrect or inaccurate data, can attract penalties, interest and ...</description>
           </item>
         </channel>
       </rss>
     `;
     return of(mockResponse).pipe(
       map((response) => this.parseRSS(response))
     );
*/
    // Comment out the block above and uncomment this block to use HTTP request
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
