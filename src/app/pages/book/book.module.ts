import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {BookComponent} from './book.component';
import {BookRoutingModule} from "./book-routing.module";
import {PlayerModule} from "./player/player.module";


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    NgOptimizedImage,
    PlayerModule,
  ],
})
export class BookModule {
}
