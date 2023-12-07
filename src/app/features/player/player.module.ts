import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {PlayerComponent} from './player.component';
import {FormatTimePipe} from './pipes/format-time.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

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
    MatIconModule,
    MatCardModule,
  ]
})
export class PlayerModule {

}
