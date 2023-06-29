import { Component, inject } from '@angular/core';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  citations: Citation[] = [];
  citationService: CitationService = inject(CitationService);

  constructor() {
    this.citationService.getAllCitations().then(citations => {
      this.citations = citations;
    });
  }
}
