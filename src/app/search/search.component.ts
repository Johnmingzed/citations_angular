import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private search: SearchService) { }

  filterBy(text: string) {
    this.search.filterResults(text);
    console.log('Demande de filtrage avec : ', text);
  }
}
