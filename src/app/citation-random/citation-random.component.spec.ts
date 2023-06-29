import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationRandomComponent } from './citation-random.component';

describe('CitationRandomComponent', () => {
  let component: CitationRandomComponent;
  let fixture: ComponentFixture<CitationRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitationRandomComponent]
    });
    fixture = TestBed.createComponent(CitationRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
