import { Component, inject } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';

@Component({
  selector: 'app-citation-random',
  templateUrl: './citation-random.component.html',
  styleUrls: ['./citation-random.component.scss']
})
export class CitationRandomComponent {
  citation: Citation | undefined;
  citationService: CitationService = inject(CitationService);

  constructor() {
    this.citationService.getRandomCitation().then(citation => {
      this.citation = citation;
    });
  }
}
