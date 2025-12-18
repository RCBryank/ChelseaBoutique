import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandH5 } from './brand-h5';

describe('BrandH5', () => {
  let component: BrandH5;
  let fixture: ComponentFixture<BrandH5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandH5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandH5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
