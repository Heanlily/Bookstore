import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  dataForBooks =  [
    {id: 1, name: 'JavaScript', price: 100, author: 'Bob', category:
        'Technology'},
    {id: 2, name: 'US Travel', price: 200, author: 'Alex', category: 'Travel'},
    {id: 3, name: 'J2EE', price: 150, author: 'Jim', category: 'Technology'},
    {id: 4, name: 'Fried Food', price: 50, author: 'Kate', category: 'Food'}
  ];
  constructor(public router: Router) {

  }
  public getBooks() {
    return this.dataForBooks;
  }
  public getBook(id: number) {
    return this.getBooks().find(p => p.id === id);
  }
  public addBook(book: Book) {
    const i = this.getBooks().findIndex(b => b.id === book.id);
    if (i > -1) {
      alert('This book is in the table.');
    } else {
      this.getBooks().push(book);
      this.router.navigate(['books']);
    }
  }

  public editBook(book: Book) {
    const i = this.getBooks().findIndex(b => b.id === book.id);
    if (i > -1) {
      this.getBooks().splice(i, 1, book);
      this.router.navigate(['books']);
    } else {
      alert(`We can't find this book.`);
    }
  }
}
