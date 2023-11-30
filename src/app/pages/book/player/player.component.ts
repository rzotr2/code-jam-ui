import {AfterContentInit, Component} from '@angular/core';
import {BookComponent} from "../book.component";
import {Book} from "../../../services/data-services/data.service";



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterContentInit {
  public book: Book;

  constructor(
    public bookComponent: BookComponent
  ) {}

  ngAfterContentInit() {
    this.book = this.bookComponent.book;
    console.log(this.book.url)
  }
}
