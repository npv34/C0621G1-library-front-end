import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRatingNumberComponent } from './show-rating-number.component';

describe('ShowRatingNumberComponent', () => {
  let component: ShowRatingNumberComponent;
  let fixture: ComponentFixture<ShowRatingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRatingNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRatingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
