import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citation } from '../citation';
import { CitationService } from '../citation.service';
import { ToggleFooterService } from '../toggle-footer.service';

@Component({
  selector: 'app-citation-details',
  templateUrl: './citation-details.component.html',
  styleUrls: ['./citation-details.component.scss']
})
export class CitationDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  citationService = inject(CitationService);
  citation: Citation | undefined;

  constructor(private toggleFooterService: ToggleFooterService) {
    const citationId: number = Number(this.route.snapshot.params['id']);
    this.citationService.getCitationById(citationId).then(citation => {
      this.citation = citation;
    });
    this.toggleFooterService.toggleFooter(true);
  }

}
