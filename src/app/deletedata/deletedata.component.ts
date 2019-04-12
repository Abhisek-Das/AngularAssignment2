import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';
import { Data } from '../data';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent implements OnInit {
  deletedatacomment: Data;
  constructor(private httpdataftcherServiceObj:HttpdatafetcherService) { }

  ngOnInit() {
    console.log('in delete data');
    this.httpdataftcherServiceObj.deleteData().subscribe(param=>this.deletedatacomment=param);
  
  }

}
