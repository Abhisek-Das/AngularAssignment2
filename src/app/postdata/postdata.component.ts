import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';
import { Data } from '../data';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  postdatacomments:Data;
  constructor(private httpdatafetcherServiceObj:HttpdatafetcherService) { }

  ngOnInit() {
    console.log('in post data component');
    this.httpdatafetcherServiceObj.postData().subscribe(param=> this.postdatacomments = param);

  }

}
