import {AfterViewInit, ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {AudioStreamService, RxAudio} from './services/audio-stream.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [AudioStreamService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements AfterViewInit {
  @Input() url: string;

  constructor(
    public audioStreamService: AudioStreamService,
  ) {
  }

  public ngAfterViewInit() {
    this.audioStreamService.setSource(this.url);
  }

  public togglePlay(isPlaying: boolean): void {
    if (isPlaying) {
      this.audioStreamService.pause();
    } else {
      this.audioStreamService.play();
    }
  }

  public seekByPercent(audioState: RxAudio.State, event: MouseEvent): void {
    const progressBtn = (event.currentTarget as HTMLButtonElement);

    const clickPosition = event.pageX - progressBtn.offsetLeft;
    const actualWidth = progressBtn.offsetWidth;

    this.audioStreamService.seekTo(audioState.duration * clickPosition / actualWidth);
  }
}
