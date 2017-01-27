import { GoogleChartDirective } from './../../directives/chart.directive';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

import {NavService} from '../../services/main/nav.service';
import {ChartService} from '../../services/charts/charts.service';

import {Subscription} from 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'refresh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {
  public date: Date = new Date(2017, 0, 1);
  public dateRangeStart: Date;
  public dateRangeEnd: Date = new Date();


  public dateKnmi: Date = new Date(2017, 0, 1);
  public dateRangeStartKnmi: Date;
  public dateRangeEndKnmi: Date = new Date();

  // tslint:disable-next-line:no-inferrable-types
  public vertragingGaugeLoaded: boolean = false;

  // tslint:disable-next-line:no-inferrable-types
  public knmiGaugeLoaded: boolean = false;

  public vertragingGaugeOptions = {
    min: 0,
    max: 100,
    redFrom: 50, redTo: 100,
    redColor: '#e24f4f',
    yellowFrom: 20, yellowTo: 50,
    yellowColor: '#f8a544',
    greenFrom: 0, greenTo: 20,
    greenColor: '#4fe368',
    minorTicks: 5
  };

  public knmiGaugeOptions = {
    min: 0,
    max: 100,
    redFrom: 50, redTo: 100,
    redColor: '#e24f4f',
    yellowFrom: 20, yellowTo: 50,
    yellowColor: '#f8a544',
    greenFrom: 0, greenTo: 20,
    greenColor: '#4fe368',
    minorTicks: 5
  };

  public vertragingGaugeData = [];
  public knmiGaugeData = [];

  constructor(private navService: NavService,
              private chartService: ChartService) {
        this.navService.changeTitle('Dashboard');
  }

  ngOnInit(): void {
    this.chartService.allDatesNsData().subscribe((res: any) => {
      this.dateRangeStart = new Date(res[0]);
    });

    this.chartService.allDatesKnmi().subscribe((res: any) => {
      this.dateRangeStartKnmi = new Date(res[0]);
    });
  }

  ngAfterViewInit(): void {
    this.onDateSelect(null);
    this.onDateSelectKnmi(null);
  }

  onDateSelect(event): void {
    this.chartService.getGaugeForDatesNsData(this.date.toISOString().substring(0, 10)).subscribe((res: any) => {
      if (typeof(res[0]) !== 'undefined')  {
        this.vertragingGaugeData = [
          ['Naam', 'Percentage'],
          ['Vertraging', Number(res[0]['sum'])]
        ];

        this.vertragingGaugeLoaded = true;
      }
    });
  }

  onDateSelectKnmi(event): void {
    this.chartService.getGaugeForDatesKnmi(this.dateKnmi.toISOString().substring(0, 10)).subscribe((res: any) => {
      console.log(res);

      if (typeof(res[0]) !== 'undefined')  {
        this.knmiGaugeData = [
          ['Naam', 'Percentage'],
          ['mm neerslag', Number(res[0]['sum'])]
        ];

        this.knmiGaugeLoaded = true;
      }
    });
  }
}
