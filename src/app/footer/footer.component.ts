import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter = true;

  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
    this.toggleService.showFooter$.subscribe((showFooter) => {
      this.showFooter = showFooter;
    });
  }
}
