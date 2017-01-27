import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollapsablePanelComponent} from '../components/collapsable-panel/collapsable-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsablePanelComponent
  ],
  exports: [
    CollapsablePanelComponent
  ]
})
export class PanelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PanelModule
    };
  }
}
