import { Component, OnInit } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleService } from '../toggle.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filteredCitations: Citation[] = [];

  constructor(
    private citationService: CitationService,
    private toggleService: ToggleService,
    private search: SearchService
  ) {
    this.citationService.getAllCitations().then(citations => {
      this.search.citationsToFilter = citations;
      this.filteredCitations = citations;
    });
    this.toggleService.toggleFooter(true);
    this.toggleService.toggleSearch(true);
  }

  ngOnInit() {
    this.search.filteredCitations$.subscribe(citations => {
      this.filteredCitations = citations;
    });
  }

}
