import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-jam-ui';

  constructor(
    private http: HttpClient,
  ) {
  }

  public ngOnInit() {
    this.http.get(`${environment.apiUrl}/books`).subscribe(console.log);
  }
}
