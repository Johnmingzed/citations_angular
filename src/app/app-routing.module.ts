import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitationDetailsComponent } from './citation-details/citation-details.component';
import { CitationRandomComponent } from './citation-random/citation-random.component';

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
      title: 'Les détails de la citation',
      reuse: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
