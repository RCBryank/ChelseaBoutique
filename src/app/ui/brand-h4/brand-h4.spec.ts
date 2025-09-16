import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandH4 } from './brand-h4';

describe('BrandH4', () => {
  let component: BrandH4;
  let fixture: ComponentFixture<BrandH4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandH4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandH4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
