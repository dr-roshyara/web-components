import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsApiResponse } from './news/news.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = 'dcceb22b096c4c4ba9dc1e616055ec50';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<NewsApiResponse> {
    return this.httpClient.get<NewsApiResponse>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
