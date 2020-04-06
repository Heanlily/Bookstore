import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book = {id: -1, name: '', price: 0, author: '', category: ''};
  booksService: BooksService;
  constructor(ar: ActivatedRoute, bs: BooksService) {
    // get id from url
    const id: number = +ar.snapshot.paramMap.get('id'); // '1' -> 1
    this.booksService = bs;
    this.book = this.booksService.getBook(id);
  }

  ngOnInit(): void {
  }

  editBook() {
    this.booksService.editBook(this.book);
  }
}
