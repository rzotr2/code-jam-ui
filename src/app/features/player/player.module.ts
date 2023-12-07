import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerComponent} from './player.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import {MatButtonModule} from '@angular/material/button';

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
    MatButtonModule,
  ]
})
export class PlayerModule {

}
