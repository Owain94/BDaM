import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Rx';

@Injectable()
export class NavService {
  private title: string;

  public titleChange: Subject<string> = new Subject<string>();
  public navChange: Subject<boolean> = new Subject<boolean>();

  public changeTitle(title: string): void {
    this.title = title;
    this.titleChange.next(this.title);
  }
}
