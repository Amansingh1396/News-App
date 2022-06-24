import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  // private _http: any;

  constructor(private http:HttpClient) { }
  topHeadlines='https://newsapi.org/v2/everything?q=tesla&from=2022-05-22&sortBy=publishedAt&apiKey=5c6cae05b2aa446db4a014032fb32d75';

  techNews='https://newsapi.org/v2/everything?q=tesla&from=2022-05-22&sortBy=publishedAt&apiKey=5c6cae05b2aa446db4a014032fb32d75';


  // techNews='https://newsapi.org/v2/everything?country=in&category=technology&apiKey=5c6cae05b2aa446db4a014032fb32d75';

  tcTechNews():Observable<any>{
    return this.http.get(this.techNews);
  }



  tcHeadlines():Observable<any>{
    return this.http.get(this.topHeadlines);
  }

}