import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ListDirectiveComponent } from './list-directive/list-directive.component';
import { ListObserverComponent } from './list-observer/list-observer.component';
import { ListDeferComponent } from './list-defer/list-defer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,

    ListComponent,
    ListDirectiveComponent,
    ListObserverComponent,
    ListDeferComponent,
  ],
})
export class AppComponent {}
