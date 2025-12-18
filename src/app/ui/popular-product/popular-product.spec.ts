import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProduct } from './popular-product';

describe('PopularProduct', () => {
  let component: PopularProduct;
  let fixture: ComponentFixture<PopularProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
