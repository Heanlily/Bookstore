import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input()
  title;
  data;

  sortOption = 'id';
  sortOrder = 'Ascending';
  searchText = '';
  filteredFields: boolean[] = [false, false, false];

  constructor(bs: BooksService) {
    this.data = bs.getBooks();
  }

  ngOnInit(): void {
  }

  SortOption($event) {
    this.sortOption = $event;
    // console.log(this.sortOption);
  }

  SortOrder($event) {
    this.sortOrder = $event;
    // console.log(this.sortOrder);
  }

  SearchText($event) {
    this.searchText = $event;
  }

  FilteredFields($event) {
    this.filteredFields = [...$event];
  }


}
