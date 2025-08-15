import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linkbrandlandingpage } from './linkbrandlandingpage';

describe('Linkbrandlandingpage', () => {
  let component: Linkbrandlandingpage;
  let fixture: ComponentFixture<Linkbrandlandingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linkbrandlandingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linkbrandlandingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
