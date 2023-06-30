import { Component, Input } from '@angular/core';
import { Citation } from '../citation';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.scss']
})

export class AuteurComponent {
  @Input() citation!: Citation;
  @Input() auteur!: Auteur;
}
