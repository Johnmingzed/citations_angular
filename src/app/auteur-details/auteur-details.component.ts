import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';
import { ToggleFooterService } from '../toggle-footer.service';

@Component({
  selector: 'app-auteur-details',
  templateUrl: './auteur-details.component.html',
  styleUrls: ['./auteur-details.component.scss']
})
export class AuteurDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  auteurService = inject(AuteurService);
  auteur: Auteur | undefined;

  constructor(private toggleFooterService: ToggleFooterService) {
    const auteurName: string = this.route.snapshot.params['name'];
    this.auteurService.getAuteurByName(auteurName).then(auteur => {
      this.auteur = auteur;
    })
    this.toggleFooter(true);
  }

  toggleFooter(showFooter: boolean): void {
    this.toggleFooterService.toggleFooter(showFooter);
  }
}
