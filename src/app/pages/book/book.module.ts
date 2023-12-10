import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {BookComponent} from './book.component';
import {BookRoutingModule} from "./book-routing.module";
import {PlayerComponent} from "./player/player.component";


@NgModule({
  declarations: [
    BookComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    NgOptimizedImage,
  ],
})
export class BookModule {
}
