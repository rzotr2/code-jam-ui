import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() public name: string = '';
  @Input() public url: string = '';
  @Input() public cover: string = '';
  @Input() public description: string = '';
  @Input() public id: string = '';
}
