import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  techNewsData:any=[];

  ngOnInit(): void {
    this.api.tcTechNews().subscribe(res=>{
      console.log(res.articles)
      this.techNewsData=res.articles;

  })

}
}
