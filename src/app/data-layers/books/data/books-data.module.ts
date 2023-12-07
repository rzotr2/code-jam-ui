import {NgModule} from '@angular/core';

import {BooksRestModule} from '../rest/books-rest.module';
import {BooksDataService} from './services/books-data.service';

@NgModule({
  providers: [BooksDataService],
  imports: [BooksRestModule],
})
export class BooksDataModule {
}
