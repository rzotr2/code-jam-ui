import {Component, OnInit} from '@angular/core';
import {Book, DataService} from "../../services/data-services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  public id: string = '';
  public book: Book;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getBook();
}

  public getBook() {
    this.dataService.getBook(this.id).subscribe((book) => {
      this.book = book;
    });
  }
}
