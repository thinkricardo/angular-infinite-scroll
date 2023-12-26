import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  @Input() index: number = -1;
  @Input() item: string = '';

  @Output() loaded = new EventEmitter<number>();

  ngOnInit(): void {
    this.loaded.emit(this.index);
  }
}
