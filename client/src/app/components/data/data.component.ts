import { DataService } from './../../services/data/data.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';

import {NavService} from '../../services/main/nav.service';
import {PagerService} from '../../services/pager/pager.service';

import {Subscription} from 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'refresh-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public tab: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  public records: number = 0;
  public allData: Array<Object> = [];
  // tslint:disable-next-line:no-inferrable-types
  public database: string = 'student';

  public pager: any = {};
  private pagedItems: Array<any>;

  public loading = true;

  constructor(private navService: NavService,
              private dataService: DataService) {
        this.navService.changeTitle('Data');
  }

  ngOnInit(): void {
    this.setPage(1);
  }

  public setPage(page: number): Promise<void> {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.dataService.getCount(this.database).subscribe((countRes: any) => {
      this.records = Number(countRes);
      this.pager = PagerService.getPager(Number(countRes), page, 30);

      this.dataService.getData(this.database, page).subscribe((dataRes: any) => {
        this.pagedItems = dataRes;
        this.loading = false;
      });
    });
  }

  public changeTab(tab: number): void {
    this.tab = tab;

    if (tab === 1) {
      this.database = 'student';
      this.allData = [];
    } else if (tab === 2) {
      this.database = 'logboek';
      this.allData = [];
    } else if (tab === 3) {
      this.database = 'knmi';
      this.allData = [];
    } else {
      this.database = 'nsdata';
      this.allData = [];
    }

    this.loading = true;

    this.setPage(1);
  }
}
