import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import {NavService} from '../../services/main/nav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'refresh-not-found',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent {
  constructor(private navService: NavService) {
    this.navService.changeTitle('404');
  }
}
