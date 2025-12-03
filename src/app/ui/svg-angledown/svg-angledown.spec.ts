import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAngledown } from './svg-angledown';

describe('SvgAngledown', () => {
  let component: SvgAngledown;
  let fixture: ComponentFixture<SvgAngledown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgAngledown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgAngledown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
