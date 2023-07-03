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

  constructor(
    private search: SearchService,
    private toggleService: ToggleService
  ) { }

  filterBy(text: string) {
    this.search.filterResults(text);
    console.log('Demande de filtrage avec : ', text);
  }

  ngOnInit():void {
    this.toggleService.showSearch$.subscribe((showSearch) => {
      this.showSearch = showSearch;
    }
    )

  }
}
