import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from '../components/notfound/notfound.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {DataComponent} from '../components/data/data.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'data',
    component: DataComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {
}
