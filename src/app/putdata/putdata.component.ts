import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';
import { Data } from '../data';

@Component({
  selector: 'app-putdata',
  templateUrl: './putdata.component.html',
  styleUrls: ['./putdata.component.css']
})
export class PutdataComponent implements OnInit {
  putdatacomment:Data;
  
  constructor(private httpdataftcherServiceObj:HttpdatafetcherService) { }

  ngOnInit() {
    console.log('in put data');
    this.httpdataftcherServiceObj.putData().subscribe(param=>this.putdatacomment=param);
  }

}
