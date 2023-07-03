import { Component, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'Citations';
  // @ViewChild(SearchComponent) searchBar: SearchComponent;

  constructor(private search: SearchService) { }

  resetSearch() {
    this.search.filterResults('');
  //  console.log(this.searchBar?.filter);
  //  this.searchBar.filter = '';
  }
}