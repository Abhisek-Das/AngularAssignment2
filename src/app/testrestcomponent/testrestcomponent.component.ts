import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testrestcomponent',
  templateUrl: './testrestcomponent.component.html',
  styleUrls: ['./testrestcomponent.component.css']
})
export class TestrestcomponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  get(){
    console.log('in get');
    this.router.navigate(['/GET']);
  }

  post(){
    console.log('in post');
    this.router.navigate(['/POST']);
  }

  put(){
    console.log('in put request');
    this.router.navigate(['/PUT']);
  }

  delete(){
    console.log('in delete request');
    this.router.navigate(['/DELETE']);
  }
}
