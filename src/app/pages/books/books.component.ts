import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../services/data-services/data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy{
  public subscriptions = new Subscription();

  constructor(
    public dataService: DataService,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.dataService.loadAll(null, 9).subscribe(),
    );
  }

  public create(): void {
    this.subscriptions.add(
      this.dataService.create({
        name: `${Math.random()}`,
        url: 'https://test-audio.com'
      }).subscribe(),
    );
  }

  public delete(id: string): void {
    this.subscriptions.add(
      this.dataService.delete(id).subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
