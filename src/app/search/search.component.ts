import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  showSearch = true;
  filter:string = '';

  constructor(
    private search: SearchService,
    private toggleService: ToggleService
  ) { }

  filterBy(text: string) {
    this.search.filterResults(text);
    this.filter = text;
  }

  clearSearch() {
    this.search.filterResults('');
  }

  ngOnInit(): void {
    this.toggleService.showSearch$.subscribe((showSearch) => {
      this.showSearch = showSearch;
    })
    this.filter = '';

  }
}
