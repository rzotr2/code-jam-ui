import {Injectable} from '@angular/core';

import {combineLatest, filter, fromEvent, map, merge, Observable, startWith, withLatestFrom} from 'rxjs';

export const filterEvent = (...types: RxAudio.RxAudioEventType[]) => {
  return (source: Observable<RxAudio.RxAudioEvent>): Observable<RxAudio.RxAudioEvent> => {
    return source.pipe(filter(event => types.includes(event.type)));
  }
};

export namespace RxAudio {
  export type RxAudioEventType = 'abort' |
    'canplay' |
    'canplaythrough' |
    'durationchange' |
    'emptied' |
    'ended' |
    'error' |
    'loadeddata' |
    'loadedmetadata' |
    'loadstart' |
    'pause' |
    'play' |
    'playing' |
    'progress' |
    'ratechange' |
    'seeked' |
    'seeking' |
    'stalled' |
    'suspend' |
    'timeupdate' |
    'volumechange' |
    'waiting';

  export enum RX_AUDIO_EVENT_TYPES {
    ABORT = 'abort',
    CAN_PLAY = 'canplay',
    CAN_PLAY_THROUGH= 'canplaythrough',
    DURATION_CHANGE = 'durationchange',
    EMPTIED = 'emptied',
    ENDED = 'ended',
    ERROR = 'error',
    LOADED_DATA = 'loadeddata',
    LOADED_METADATA = 'loadedmetadata',
    LOAD_START = 'loadstart',
    PAUSE = 'pause',
    PLAY = 'play',
    PLAYING = 'playing',
    PROGRESS = 'progress',
    RATE_CHANGE = 'ratechange',
    SEEKED = 'seeked',
    SEEKING = 'seeking',
    STALLED = 'stalled',
    SUSPEND = 'suspend',
    TIME_UPDATE = 'timeupdate',
    VOLUME_CHANGE = 'volumechange',
    WAITING = 'waiting',
  }

  export interface RxAudioEvent extends Event {
    type: RxAudioEventType;
  }

  export interface State {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    progressPercentage: number;
    isReady: boolean;
  }
}

@Injectable()
export class AudioStreamService {
  public readonly supportedEvents: RxAudio.RxAudioEventType[] = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waiting',
  ];

  private readonly audio = new Audio();

  public readonly eventsStream$ = this.getEventsStream();

  public readonly isPlaying$: Observable<boolean> = this.eventsStream$.pipe(
    filterEvent(RxAudio.RX_AUDIO_EVENT_TYPES.PLAY, RxAudio.RX_AUDIO_EVENT_TYPES.PAUSE),
    map(() => (!this.audio.paused)),
    startWith(!this.audio.paused),
  );

  public readonly currentTime$: Observable<number> = this.eventsStream$.pipe(
    filterEvent(RxAudio.RX_AUDIO_EVENT_TYPES.TIME_UPDATE),
    map(() => (this.audio.currentTime)),
    startWith(this.audio.currentTime ?? 0),
  );

  public readonly isReady$: Observable<boolean> = this.eventsStream$.pipe(
    filterEvent(RxAudio.RX_AUDIO_EVENT_TYPES.CAN_PLAY),
    map(() => true),
    startWith(false),
  );

  public readonly duration$: Observable<number> = this.eventsStream$.pipe(
    filterEvent(RxAudio.RX_AUDIO_EVENT_TYPES.CAN_PLAY, RxAudio.RX_AUDIO_EVENT_TYPES.DURATION_CHANGE),
    map(() => (this.audio.duration)),
    startWith(this.audio.duration ?? 0),
  );

  public readonly progressPercentage$: Observable<number> = this.currentTime$.pipe(
    withLatestFrom(this.duration$),
    map(([currentTime, duration]) => {
      if (isNaN(duration) || isNaN(currentTime)) {
        return 0;
      }

      return (currentTime / duration) * 100;
    }),
    startWith(0),
  );

  public readonly state$: Observable<RxAudio.State> = combineLatest({
    isPlaying: this.isPlaying$,
    currentTime: this.currentTime$,
    duration: this.duration$,
    progressPercentage: this.progressPercentage$,
    isReady: this.isReady$
  });

  public setSource(src: string): void {
    this.audio.src = src;
  }

  public play(): Promise<void> {
    return this.audio.play();
  }

  public pause(): void {
    this.audio.pause();
  }

  public seek(currentTime: number, seekTime: number): void {
    this.audio.currentTime = currentTime + seekTime;
  }

  public seekTo(seekTo: number): void {
    this.audio.currentTime = seekTo;
  }

  private getEventsStream(): Observable<RxAudio.RxAudioEvent> {
    const eventStreams: Observable<RxAudio.RxAudioEvent>[] = this.supportedEvents.map(
      (event: RxAudio.RxAudioEventType) => fromEvent<RxAudio.RxAudioEvent>(this.audio, event)
    );

    return merge(...eventStreams);
  }
}
