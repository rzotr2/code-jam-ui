import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import {BooksRoutingModule} from "./books-routing.module";
import {BookCardComponent} from "./components/book-card/book-card.component";
import {DataService} from "../../services/data-services/data.service";
import {DataServicesModule} from "../../services/data-services/data-services.module";

@NgModule({
  declarations: [
    BooksComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    DataServicesModule
  ],
  providers: [
    DataService
  ]
})
export class BooksModule {
  
}
