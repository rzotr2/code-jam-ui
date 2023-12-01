import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(seconds: number): string {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
  }
}
