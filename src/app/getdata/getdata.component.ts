import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';
import { Data } from '../data';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  datacomments:Data[]
  constructor( private httpdatafetcherServiceObj:HttpdatafetcherService) { }

  ngOnInit() {
    console.log('in get data component');
    this.httpdatafetcherServiceObj.getData().subscribe(param=> this.datacomments = param);
  }

}
