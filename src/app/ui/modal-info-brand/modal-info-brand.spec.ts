import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoBrand } from './modal-info-brand';

describe('ModalInfoBrand', () => {
  let component: ModalInfoBrand;
  let fixture: ComponentFixture<ModalInfoBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInfoBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfoBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
