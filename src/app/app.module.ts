import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CitationComponent } from './citation/citation.component';
import { CitationDetailsComponent } from './citation-details/citation-details.component';
import { CitationRandomComponent } from './citation-random/citation-random.component';
import { AuteurComponent } from './auteur/auteur.component';
import { AuteurDetailsComponent } from './auteur-details/auteur-details.component';
import { ToggleFooterService } from './toggle-footer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    CitationComponent,
    CitationDetailsComponent,
    CitationRandomComponent,
    AuteurComponent,
    AuteurDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ToggleFooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
