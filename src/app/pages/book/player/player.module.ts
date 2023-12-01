import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerComponent} from './player.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [
    PlayerComponent,
    FormatTimePipe
  ],
  exports: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PlayerModule {

}
