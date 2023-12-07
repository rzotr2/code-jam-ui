import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BooksRestService} from './services/books-rest.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [BooksRestService]
})
export class BooksRestModule {
}
