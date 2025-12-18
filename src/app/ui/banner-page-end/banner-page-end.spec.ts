import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageEnd } from './banner-page-end';

describe('BannerPageEnd', () => {
  let component: BannerPageEnd;
  let fixture: ComponentFixture<BannerPageEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPageEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPageEnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
