import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NotFoundComponent} from '../components/notfound/notfound.component';

//noinspection JSUnusedGlobalSymbols
@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
