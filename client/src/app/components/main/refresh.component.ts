import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  trigger,
  state,
  style,
  animate,
  transition,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

import {NavService} from '../../services/main/nav.service';

import {Subscription} from 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'refresh-root',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css'],
  animations: [
    trigger('loadedChanged', [
      state('true', style({
        'opacity': '0',
        'visibility': 'hidden'
      })),
      transition('* => *', animate(500))
    ])
  ]
})
export class RefreshComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbar') navbar: ElementRef;

  public title: string;
  // tslint:disable-next-line:no-inferrable-types
  public collapsed: boolean = true;
  private titleSubscription: Subscription;
  private navSubscription: Subscription;
  // tslint:disable-next-line:no-inferrable-types
  public loaded: boolean = false;

  // tslint:disable-next-line:no-inferrable-types
  public navWidth: number = 0;

  constructor(private navService: NavService) {

  }

  ngOnInit(): void {
    this.titleSubscription = this.navService.titleChange.subscribe((value: string) => {
      this.title = value;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    });

    this.onNavResize(this.navbar.nativeElement.getBoundingClientRect());
  }

  ngOnDestroy(): void {
    if (typeof(this.titleSubscription) !== 'undefined') {
      this.titleSubscription.unsubscribe();
    }

    if (typeof(this.navSubscription) !== 'undefined') {
      this.navSubscription.unsubscribe();
    }
  }

  public onNavResize(event: Event): void {
    this.navWidth = event['width'];
  }

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    if (this.navWidth >= 768) {
      this.collapsed = true;
    }
  }

  // tslint:disable-next-line:no-inferrable-types
  public navBarClick(force: boolean = false): void {
    if (force) {
      this.collapsed = true;
    } else {
      this.collapsed = !this.collapsed;
    }
  }
}
