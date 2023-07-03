import { Component } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-citation-random',
  templateUrl: './citation-random.component.html',
  styleUrls: ['./citation-random.component.scss']
})
export class CitationRandomComponent {
  citation: Citation | undefined;

  constructor(
    private toggleService: ToggleService,
    private citationService: CitationService
  ) {
    this.citationService.getRandomCitation().then(citation => {
      this.citation = citation;
    });
    this.toggleService.toggleFooter(false);
    this.toggleService.toggleSearch(false);
  }

  reloadPage() {
    this.citationService.getRandomCitation().then(citation => {
      this.citation = citation;
      this.toggleService.toggleFooter(false);
    });
  }

}
