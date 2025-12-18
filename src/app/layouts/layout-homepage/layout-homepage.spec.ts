import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomepage } from './layout-homepage';

describe('LayoutHomepage', () => {
  let component: LayoutHomepage;
  let fixture: ComponentFixture<LayoutHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
