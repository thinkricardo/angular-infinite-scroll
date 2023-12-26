import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectedDirective } from './intersected.directive';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-list-observer',
  standalone: true,
  templateUrl: './list-observer.component.html',
  styleUrl: './list-observer.component.scss',
  imports: [CommonModule, IntersectedDirective],
})
export class ListObserverComponent {
  utilsService = inject(UtilsService);

  items: string[] = this.utilsService.generateItems(0, 50);

  loadItems(i: number) {
    if (i === this.items.length - 1) {
      const newItems = this.utilsService.generateItems(i, 10);

      this.items = [...this.items, ...newItems];
    }
  }
}
