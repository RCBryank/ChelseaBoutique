import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandH3 } from './brand-h3';

describe('BrandH3', () => {
  let component: BrandH3;
  let fixture: ComponentFixture<BrandH3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandH3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandH3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
