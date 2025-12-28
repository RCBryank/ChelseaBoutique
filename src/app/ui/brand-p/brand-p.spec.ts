import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandP } from './brand-p';

describe('BrandP', () => {
  let component: BrandP;
  let fixture: ComponentFixture<BrandP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
