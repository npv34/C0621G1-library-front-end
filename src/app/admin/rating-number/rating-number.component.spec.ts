import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingNumberComponent } from './rating-number.component';

describe('RatingNumberComponent', () => {
  let component: RatingNumberComponent;
  let fixture: ComponentFixture<RatingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
