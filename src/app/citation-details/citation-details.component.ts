import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-citation-details',
  templateUrl: './citation-details.component.html',
  styleUrls: ['./citation-details.component.scss']
})
export class CitationDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  citationService = inject(CitationService);
  citation: Citation | undefined;

  constructor(private toggleService: ToggleService) {
    const citationId: number = Number(this.route.snapshot.params['id']);
    this.citationService.getCitationById(citationId).then(citation => {
      this.citation = citation;
    });
    this.toggleService.toggleFooter(true);
    this.toggleService.toggleSearch(false);
  }

}
