import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {switchMap} from 'rxjs';

import {Book, BooksRestService} from '@books-dl';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(
    private booksRestService: BooksRestService,
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => {
        return this.booksRestService.getOne(id);
      }),
    ).subscribe((result) => {
      this.book = result.response;
      this.changeDetectorRef.detectChanges();
    });
  }
}
