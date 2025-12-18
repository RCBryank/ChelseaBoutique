import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductRight } from './popular-product-right';

describe('PopularProductRight', () => {
  let component: PopularProductRight;
  let fixture: ComponentFixture<PopularProductRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularProductRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
