import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  public subscriptions = new Subscription();

  constructor(
    public dataService: DataService,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.dataService.loadAll().subscribe(),
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
