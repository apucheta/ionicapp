import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public httpClient: HttpClient) {}

  sendPostRequest(){
    let postData = {
      "username":"HebraicaApp",//user para usar la api
      "password":"***********"//password para usar la api
    }
    this.httpClient.post('http://app.hebraica.org.ar:8025/hebraica/test/token.json',postData,{})
    .subscribe(data=>{
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

  sendGetRequest(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').
    subscribe(data=>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }
}
