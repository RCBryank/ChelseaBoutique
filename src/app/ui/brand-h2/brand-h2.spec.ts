import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandH2 } from './brand-h2';

describe('BrandH2', () => {
  let component: BrandH2;
  let fixture: ComponentFixture<BrandH2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandH2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandH2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
