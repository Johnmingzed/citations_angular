import { Component, Input } from '@angular/core';
import { Citation } from '../citation';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})

export class CitationComponent {
  @Input() citation!: Citation;
}
