import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsService } from '../utils.service';

import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-list-defer',
  standalone: true,
  templateUrl: './list-defer.component.html',
  styleUrl: './list-defer.component.scss',
  imports: [CommonModule, ListItemComponent],
})
export class ListDeferComponent {
  utilsService = inject(UtilsService);
  cdr = inject(ChangeDetectorRef);

  items = this.utilsService.generateItems(0, 50);

  loadItems(i: number) {
    if (i === this.items.length - 1) {
      const newItems = this.utilsService.generateItems(i, 10);
      this.items = [...this.items, ...newItems];

      this.cdr.detectChanges();
    }
  }
}
