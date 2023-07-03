import { Component, OnInit } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleFooterService } from '../toggle-footer.service';
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
    private toggleFooterService: ToggleFooterService,
    private search: SearchService
  ) {
    this.citationService.getAllCitations().then(citations => {
      this.search.citationsToFilter = citations;
      this.filteredCitations = citations;
      console.log('✅ Home contructor', this.filteredCitations);
    });
    this.toggleFooterService.toggleFooter(true);
  }

  ngOnInit() {
    this.search.filteredCitations$.subscribe(citations => {
      this.filteredCitations = citations;
    });
  }

}
