import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RoutingModule} from './modules/routing.module';
import {DashboardModule} from './modules/dashboard.module';
import {DataModule} from './modules/data.module';
import {NotFoundModule} from './modules/notfound.module';

import {RefreshComponent} from './components/main/refresh.component';

import {WindowService} from './services/main/window.service';
import {NavService} from './services/main/nav.service';

@NgModule({
  declarations: [
    RefreshComponent
  ],
  imports: [
    DashboardModule,
    DataModule,
    NotFoundModule,
    RoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    NavService,
    WindowService
  ],
  bootstrap: [
    RefreshComponent
  ]
})
export class AppModule { }
