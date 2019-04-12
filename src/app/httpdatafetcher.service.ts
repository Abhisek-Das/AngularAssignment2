import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpdatafetcherService {

  postDataJson:Data;

  constructor(private httpClientObj:HttpClient) { }

  getData():Observable<Data[]>{
    let myGetURL='http://localhost:8080/Spring-RestAssignment/viewBook';
    return this.httpClientObj.get<Data[]>(myGetURL);

  }

  postData():Observable<Data>{
    // let postDataJson = {
    //   "userId": 90,
    //   "id": 101,
    //   "title": "Title",
    //   "body": "Body"
    // };
    // let myPostURL='https://jsonplaceholder.typicode.com/posts';
    let postDataJson = {
      "bookId":13,
      "title":"AngularBook",
      "price":13,
      "volume":130,
      "publishDate":"2019-02-11"
    };
    
    let myPostURL='http://localhost:8080/Spring-RestAssignment/addBook';
    return this.httpClientObj.post<Data>(myPostURL,postDataJson); 
  }

  putData():Observable<Data>{
    // let putDataJson = {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "Title1",
    //   "body": "Body1"
    // }
    let putDataJson = {
      "bookId":13,
      "title":"AngularBook-Modified",
      "price":19,
      "volume":190,
      "publishDate":"2019-02-11"
    };
    // let myPutURL='https://jsonplaceholder.typicode.com/posts/1';
    let myPutURL='http://localhost:8080/Spring-RestAssignment/updateBook/13';
    return this.httpClientObj.put<Data>(myPutURL,putDataJson); 
  }

  deleteData():Observable<Data>{
    let putDeleteJson = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }
    // let myDeleteURL='https://jsonplaceholder.typicode.com/posts/1';
    let myDeleteURL='http://localhost:8080/Spring-RestAssignment/deleteBook/13';
    return this.httpClientObj.delete<Data>(myDeleteURL); 
  }
}
