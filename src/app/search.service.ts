import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Citation } from './citation';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  citationsToFilter: Citation[] = [];
  private filteredCitationsSubject = new BehaviorSubject<Citation[]>([]);
  filteredCitations$ = this.filteredCitationsSubject.asObservable();

  constructor() { }

  filterResults(text: string) {
    if (!text) {
      this.filteredCitationsSubject.next(this.citationsToFilter);
    }

    this.filteredCitationsSubject.next(this.citationsToFilter.filter(
      citation => citation?.citation.toLowerCase().includes(text.toLowerCase())
    ));
  }
}
