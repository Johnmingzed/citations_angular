import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurDetailsComponent } from './auteur-details.component';

describe('AuteurDetailsComponent', () => {
  let component: AuteurDetailsComponent;
  let fixture: ComponentFixture<AuteurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuteurDetailsComponent]
    });
    fixture = TestBed.createComponent(AuteurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
