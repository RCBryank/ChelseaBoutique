import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPrimaryButton } from './brand-primary-button';

describe('BrandPrimaryButton', () => {
  let component: BrandPrimaryButton;
  let fixture: ComponentFixture<BrandPrimaryButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandPrimaryButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPrimaryButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
