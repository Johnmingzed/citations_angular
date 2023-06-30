import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleFooterService {
  private showFooterSubject = new BehaviorSubject<boolean>(false);
  showFooter$ = this.showFooterSubject.asObservable();

  toggleFooter(showFooter: boolean): void {
    this.showFooterSubject.next(showFooter);
  }
}
