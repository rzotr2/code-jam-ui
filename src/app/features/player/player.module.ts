import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {PlayerComponent} from './player.component';
import {FormatTimePipe} from './pipes/format-time.pipe';

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
