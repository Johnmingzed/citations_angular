import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends HomeComponent {
  filterResults(text: string) {
    if (!text) {
      this.filteredCitations = this.citations;
    }

    this.filteredCitations = this.citations.filter(
      citation => citation?.citation.toLowerCase().includes(text.toLowerCase())
    );
    console.log(this.filteredCitations);
  }
}
