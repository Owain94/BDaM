import {Injectable} from '@angular/core';
import {
  Http,
  Jsonp,
  Response,
  Headers,
  RequestOptions,
  RequestMethod,
  Request
} from '@angular/http';

import {Subject} from 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getData(database: string, page: number) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `SELECT "public".${database}.* FROM "public".${database} LIMIT 30 OFFSET ${(page - 1) * 30}`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        return res;
      });
  }

  getCount(database: string) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `SELECT COUNT("public".${database}.*) FROM "public".${database}`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        return res[0]['count'];
      });
  }
}
