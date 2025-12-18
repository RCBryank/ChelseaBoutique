import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorBrand } from './modal-error-brand';

describe('ModalErrorBrand', () => {
  let component: ModalErrorBrand;
  let fixture: ComponentFixture<ModalErrorBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalErrorBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalErrorBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
