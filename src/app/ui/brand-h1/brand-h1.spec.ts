import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandH1 } from './brand-h1';

describe('BrandH1', () => {
  let component: BrandH1;
  let fixture: ComponentFixture<BrandH1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandH1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandH1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
