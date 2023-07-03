import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private showFooterSubject = new BehaviorSubject<boolean>(false);
  showFooter$ = this.showFooterSubject.asObservable();

  private showSearchSubject = new BehaviorSubject<boolean>(false);
  showSearch$ = this.showSearchSubject.asObservable();

  toggleFooter(showFooter: boolean): void {
    this.showFooterSubject.next(showFooter);
  }

  toggleSearch(showSearch: boolean): void {
    this.showSearchSubject.next(showSearch);
  }
}
