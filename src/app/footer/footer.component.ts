import { Component, OnInit } from '@angular/core';
import { ToggleFooterService } from '../toggle-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter = true;

  constructor(private toggleFooterService: ToggleFooterService) { }

  ngOnInit(): void {
    this.toggleFooterService.showFooter$.subscribe((showFooter) => {
      this.showFooter = showFooter;
    });
  }
}
