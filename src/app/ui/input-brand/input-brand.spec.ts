import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBrand } from './input-brand';

describe('InputBrand', () => {
  let component: InputBrand;
  let fixture: ComponentFixture<InputBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
