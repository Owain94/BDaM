import {
  Component,
  ChangeDetectionStrategy,
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'refresh-collapsable-panel',
  templateUrl: './collapsable-panel.component.html',
  styleUrls: ['./collapsable-panel.component.css'],
  animations: [
    trigger('collapseChanged', [
      state('false' , style({
       '-webkit-transform': 'rotate(0deg)',
       '-ms-transform': 'rotate(0deg)',
       'transform': 'rotate(0deg)'
      })),
      state('true', style({
       '-webkit-transform': 'rotate(180deg)',
       '-ms-transform': 'rotate(180deg)',
       'transform': 'rotate(180deg)'
      })),
      transition('* => *', animate(200))
    ])
  ]
})
export class CollapsablePanelComponent {
  @Input() public panelTitle: string;
  @Input() public radius: Array<number> = [4, 4, 4, 4];

  // tslint:disable-next-line:no-inferrable-types
  public collapse: boolean = false;

  constructor() {
  }

  public collapsePanel(): void {
    this.collapse = !this.collapse;
  }
}
