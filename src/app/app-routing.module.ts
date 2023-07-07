import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitationDetailsComponent } from './citation-details/citation-details.component';
import { CitationRandomComponent } from './citation-random/citation-random.component';
import { AuteurDetailsComponent } from './auteur-details/auteur-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil'
  },
  {
    path: 'random',
    component: CitationRandomComponent,
    data: {
      title: 'Une citation au hasard',
      reuse: false
    }
  },
  {
    path: 'details/:id',
    component: CitationDetailsComponent,
    data: {
      title: 'Les détails de la citation'
    }
  },
  {
    path: 'auteur/:name',
    component: AuteurDetailsComponent,
    data: {
      title: 'Les détails d\'un auteur'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
