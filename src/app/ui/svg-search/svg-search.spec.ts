import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSearch } from './svg-search';

describe('SvgSearch', () => {
  let component: SvgSearch;
  let fixture: ComponentFixture<SvgSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
