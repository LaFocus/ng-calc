import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSumsComponent } from './related-sums.component';

describe('RelatedSumsComponent', () => {
  let component: RelatedSumsComponent;
  let fixture: ComponentFixture<RelatedSumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedSumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedSumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
