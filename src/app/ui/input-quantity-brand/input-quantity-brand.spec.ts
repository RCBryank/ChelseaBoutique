import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuantityBrand } from './input-quantity-brand';

describe('InputQuantityBrand', () => {
  let component: InputQuantityBrand;
  let fixture: ComponentFixture<InputQuantityBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuantityBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputQuantityBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
