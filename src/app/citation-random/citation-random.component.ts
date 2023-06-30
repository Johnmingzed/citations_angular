import { Component } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleFooterService } from '../toggle-footer.service';

@Component({
  selector: 'app-citation-random',
  templateUrl: './citation-random.component.html',
  styleUrls: ['./citation-random.component.scss']
})
export class CitationRandomComponent {
  citation: Citation | undefined;

  constructor(
    private toggleFooterService: ToggleFooterService,
    private citationService: CitationService
  ) {
    this.citationService.getRandomCitation().then(citation => {
      this.citation = citation;
    });
    this.toggleFooter(false);
  }

  reloadPage() {
    this.citationService.getRandomCitation().then(citation => {
      this.citation = citation;
      this.toggleFooter(false);
    });
  }

  toggleFooter(showFooter: boolean): void {
    this.toggleFooterService.toggleFooter(showFooter);
  }

}
