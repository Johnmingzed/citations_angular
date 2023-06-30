import { Component, Input } from '@angular/core';
import { Citation } from '../citation';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})

export class CitationComponent {
  @Input() citation!: Citation;
  @Input() auteur!: Auteur;
}
