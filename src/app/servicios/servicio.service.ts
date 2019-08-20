import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public httpClient: HttpClient) { }
  token = '';
  url = 'http://app.hebraica.org.ar:8025/hebraica/test/';

  public login() {
    const postData = {
      username: 'HebraicaApp', // user para usar la api
      password: 'hebraicaionic' // password para usar la api
    };

    this.httpClient.post('http://app.hebraica.org.ar:8025/hebraica/test/token.json', postData, {})
    .subscribe(data => {
      // console.log(data['token']);
      this.token = `${data['token']}`;
    }, error => {
      console.log(error);
    });
  }

  public saldoFliar(id: string) {
      this.login();
      const httpOptions = {
        headers: new HttpHeaders({
          // tslint:disable-next-line: max-line-length
          Authorization: `Bearer ${this.token}`
        })
      };
      this.httpClient.get(this.url + `apihebraica_test/${id}.json`, httpOptions).
      subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });


  }
  public detalleCC(id) {
    this.login();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    };
    this.httpClient.get(this.url + `apiheb_test/${id}.json`, httpOptions)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
