import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';

@Component({
  selector: 'app-auteur-details',
  templateUrl: './auteur-details.component.html',
  styleUrls: ['./auteur-details.component.scss']
})
export class AuteurDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  auteurService = inject(AuteurService);
  auteur:Auteur | undefined;

  constructor() {
    const auteurName:string = this.route.snapshot.params['name'];
    this.auteurService.getAuteurByName(auteurName).then(auteur => {
      this.auteur = auteur;
      console.log(auteur);
    })
  }
}
