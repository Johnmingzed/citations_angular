import { Component, inject } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleFooterService } from '../toggle-footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  citations: Citation[] = [];
  filteredCitations: Citation[] = [];
  citationService: CitationService = inject(CitationService);

  constructor(private toggleFooterService: ToggleFooterService) {
    this.citationService.getAllCitations().then(citations => {
      this.citations = citations;
      this.filteredCitations = citations;
    });
    this.toggleFooterService.toggleFooter(true);
  }

}
