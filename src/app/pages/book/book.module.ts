import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookComponent} from './book.component';
import {BookRoutingModule} from './book-routing.module';
import {PlayerModule} from '../../features/player/player.module';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    PlayerModule
  ],
})
export class BookModule {
}
