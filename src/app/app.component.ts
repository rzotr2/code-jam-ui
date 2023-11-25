import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    this.http.get('https://code-jam-serv-1c40d7e358ba.herokuapp.com/books').subscribe(console.log);
  }
}
