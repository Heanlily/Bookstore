import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../models/book';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  transform(books: Book[], sortOption: string, sortOrder: string, searchText: string, filteredFields: boolean[]): Book[] {
    let temp = books;
    temp = temp.sort((b1: Book, b2: Book) => {
      let x = b1[sortOption];
      let y = b2[sortOption];
      if (typeof x === 'number' && typeof y === 'number') {
        if (sortOrder === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      } else if (typeof x === 'string' && typeof y === 'string') {
        x = x.toLowerCase();
        y = y.toLowerCase();
        if (sortOrder === 'asc') {
          return x > y ? 1 : -1;
        } else {
          return x < y ? 1 : -1;
        }
      }
    });
    // filter searchText
    temp = temp.filter(book => {
      return (book.id.toString().indexOf(searchText) > -1)
        || (book.name.indexOf(searchText) > -1)
        || (book.price.toString().indexOf(searchText) > -1)
        || (book.author.indexOf(searchText) > -1)
        || (book.category.indexOf(searchText) > -1);
    });

    if (filteredFields[0] || filteredFields[1] || filteredFields[2] === true) {
      if (filteredFields[0] === true) {
        temp = temp.filter(book => book.category === 'Technology');
      }
      if (filteredFields[1] === true) {
        temp = temp.filter(book => book.category === 'Travel');
      }
      if (filteredFields[2] === true) {
        temp = temp.filter(book => book.category === 'Food');
      }
    }
    return temp;
  }

}
