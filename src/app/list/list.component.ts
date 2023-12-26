import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [CommonModule],
})
export class ListComponent {
  utilsService = inject(UtilsService);

  items: string[] = this.utilsService.generateItems(0, 50);

  @HostListener('scroll', ['$event'])
  onScroll(evt: Event & { target: HTMLElement }) {
    if (this.utilsService.hasReachedEnd(evt.target)) {
      this.loadItems();
    }
  }

  loadItems() {
    const newItems = this.utilsService.generateItems(this.items.length, 10);
    this.items = [...this.items, ...newItems];
  }
}
