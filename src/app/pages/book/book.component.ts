import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Subscription, switchMap} from 'rxjs';

import {Book, BooksRestService} from '@books-dl';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  public book: Book;

  constructor(
    private booksRestService: BooksRestService,
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.pipe(
        switchMap(({id}) => this.booksRestService.getOne(id)),
      ).subscribe((result) => {
        this.book = result.response;
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
