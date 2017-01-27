import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanelModule} from './panel.module';
import {DatepickerModule} from 'angular2-material-datepicker';

import {DashboardComponent} from '../components/dashboard/dashboard.component';

import {GoogleChartDirective} from '../directives/chart.directive';

import {ChartService} from '../services/charts/charts.service';

//noinspection JSUnusedGlobalSymbols
@NgModule({
  declarations: [
    DashboardComponent,
    GoogleChartDirective
  ],
  imports: [
    DatepickerModule,
    PanelModule.forRoot(),
    CommonModule
  ],
  providers: [
    ChartService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
