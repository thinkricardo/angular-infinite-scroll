import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollableDirective } from './scrollable.directive';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-list-directive',
  standalone: true,
  templateUrl: './list-directive.component.html',
  styleUrl: './list-directive.component.scss',
  imports: [CommonModule, ScrollableDirective],
})
export class ListDirectiveComponent {
  utilsService = inject(UtilsService);

  items: string[] = this.utilsService.generateItems(0, 50);

  loadItems() {
    const newItems = this.utilsService.generateItems(this.items.length, 10);
    this.items = [...this.items, ...newItems];
  }
}
