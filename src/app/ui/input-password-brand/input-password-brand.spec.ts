import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordBrand } from './input-password-brand';

describe('InputPasswordBrand', () => {
  let component: InputPasswordBrand;
  let fixture: ComponentFixture<InputPasswordBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPasswordBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPasswordBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
