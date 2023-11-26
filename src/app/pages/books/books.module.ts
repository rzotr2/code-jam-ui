import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import {BooksRoutingModule} from "./books-routing.module";
import {BookCardComponent} from "./components/book-card/book-card.component";
import {ModalUploadComponent} from "./components/modal/modal-upload.component";
import {NgxSimpleTextEditorModule} from "ngx-simple-text-editor";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BooksComponent,
    BookCardComponent,
    ModalUploadComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    NgxSimpleTextEditorModule,
    ReactiveFormsModule
  ],
})
export class BooksModule {

}
