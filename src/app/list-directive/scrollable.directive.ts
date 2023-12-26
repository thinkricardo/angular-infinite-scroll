import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';

import { UtilsService } from '../utils.service';

@Directive({
  selector: '[scrollable]',
  standalone: true,
})
export class ScrollableDirective {
  @Output() triggerReached = new EventEmitter<boolean>();

  utilsService = inject(UtilsService);

  @HostListener('scroll', ['$event'])
  onScroll(evt: Event & { target: HTMLElement }) {
    if (this.utilsService.hasReachedEnd(evt.target)) {
      this.triggerReached.emit(true);
    }
  }
}
