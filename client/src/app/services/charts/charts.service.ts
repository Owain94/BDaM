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
export class ChartService {
  constructor(private http: Http) { }

  allDatesNsData() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `select distinct on (datum) datum from nsdata`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        for (const item in res) {
          if (res.hasOwnProperty(item)) {
            const date = String(res[item]['datum']).substring(0, 10);
            res[item] = date;
          }
        }

        return res;
      });
  }

  getGaugeForDatesNsData(date: string) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `select datum, SUM(vertraging) from nsdata where datum = '${date}' group by 1;`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        console.log(res);

        return res;
      });
  }

  allDatesKnmi() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `select distinct on (datum) datum from knmi`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        for (const item in res) {
          if (res.hasOwnProperty(item)) {
            const date = String(res[item]['datum']).substring(0, 10);
            res[item] = date;
          }
        }

        return res;
      });
  }

  getGaugeForDatesKnmi(date: string) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestoptions: RequestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000',
        headers: headers,
        body: JSON.stringify({'command': `select datum, SUM(regen) from knmi where datum = '${date}' group by 1;`})
    });

    return this.http.request(new Request(requestoptions))
      .map((res: Response) => res.json())
      .map((res: any) => {
        console.log(res);

        return res;
      });
  }
}
