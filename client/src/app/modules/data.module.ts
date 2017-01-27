import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanelModule} from './panel.module';

import {DataComponent} from '../components/data/data.component';

import {CommaSeparatedNumberPipe} from '../pipes/thousand.separator.pipe';
import {DateFuckUp} from '../pipes/date.fuckup.pipe';

import {DataService} from '../services/data/data.service';

//noinspection JSUnusedGlobalSymbols
@NgModule({
  declarations: [
    DataComponent,
    CommaSeparatedNumberPipe,
    DateFuckUp
  ],
  imports: [
    PanelModule.forRoot(),
    CommonModule
  ],
  providers: [
    DataService
  ],
  exports: [
    DataComponent
  ]
})
export class DataModule {
}
