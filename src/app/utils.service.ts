import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  hasReachedEnd(element: HTMLElement) {
    return element.offsetHeight + element.scrollTop >= element.scrollHeight;
  }

  generateItems(startIndex: number, amount: number) {
    const items = Array.from({ length: amount }).map(
      (_, index) => `Item ${startIndex + index + 1}`
    );

    return items;
  }
}
