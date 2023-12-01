import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';

import {AudioStreamService, RxAudio} from './services/audio-stream.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [AudioStreamService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements AfterViewInit {
  constructor(
    public audioStreamService: AudioStreamService,
  ) {
  }

  public ngAfterViewInit() {
    this.audioStreamService.setSource('https://www.info.kh.ua/wp-content/uploads/2023/03/%D0%86.%D0%9A%D0%BE%D1%82%D0%BB%D1%8F%D1%80%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%95%D0%BD%D0%B5%D1%97%D0%B4%D0%B0.mp3');
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
