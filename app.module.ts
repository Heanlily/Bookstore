import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {Route, RouterModule} from '@angular/router';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent
  },
  {
    path: '**', // wildcard match any path
    redirectTo: '/books'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    DataFilterComponent,
    AddBookComponent,
    EditBookComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
