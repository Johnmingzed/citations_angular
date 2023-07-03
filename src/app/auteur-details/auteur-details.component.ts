import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-auteur-details',
  templateUrl: './auteur-details.component.html',
  styleUrls: ['./auteur-details.component.scss']
})
export class AuteurDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  auteurService = inject(AuteurService);
  auteur: Auteur | undefined;

  constructor(private toggleService: ToggleService) {
    const auteurName: string = this.route.snapshot.params['name'];
    this.auteurService.getAuteurByName(auteurName).then(auteur => {
      this.auteur = auteur;
    })
    this.toggleService.toggleFooter(true);
    this.toggleService.toggleSearch(false);
  }

}
