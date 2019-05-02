import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class OrderService {

  constructor(private http: Http) {}

  insert(param) : Promise<any>{
    let url = 'http://localhost:8080' + '/order';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(url, param, {headers: headers})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }

  list() : Promise<any>{
    let url = 'http://localhost:8080' + '/order';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(url, {headers: headers, body: ''})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }

}
