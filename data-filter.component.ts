import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {
  sortOption = 'id';
  sortOrder = 'asc';
  searchText = '';
  filteredFields: boolean[] = [false, false, false];

  @Output()
  SortOption: EventEmitter <string> = new EventEmitter<string>();
  @Output()
  SortOrder: EventEmitter <string> = new EventEmitter<string>();
  @Output()
  SearchText: EventEmitter <string> = new EventEmitter<string>();
  // @ts-ignore
  // @ts-ignore
  @Output()
    // tslint:disable-next-line:new-parens
  FilteredFields: EventEmitter <boolean[]> = new EventEmitter <boolean[]>()
  constructor() {
  // @ts-ignore
}

  ngOnInit(): void {
    this.SortOption.emit(this.sortOption);
    this.SortOrder.emit(this.sortOrder);
  }

  sortOptionResult() {
    this.SortOption.emit(this.sortOption);
  }
  sortOrderResult() {
    this.SortOrder.emit(this.sortOrder);
  }

  searchTextResult() {
    // console.log('emitted!');
    this.SearchText.emit(this.searchText);
  }

  filteredFieldsResult(field: number) {
    this.FilteredFields.emit(this.filteredFields);
  }



  }
