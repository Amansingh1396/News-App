import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( private api:NewsapiService) { }
topHeadlinesData:any=[];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe(res=>{
      console.log(res.articles)
      this.topHeadlinesData=res.articles;
    })

  }

}
