import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  list() : Promise<any>{
    let url = 'http://localhost:8080' + '/product';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(url, {headers: headers, body: ''})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }

  consult(product) : Promise<any>{
    let url = 'http://localhost:8080' + '/product/' + product;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(url, {headers: headers, body: ''})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }
}
