import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectorWrapper } from './intersector-wrapper';

describe('IntersectorWrapper', () => {
  let component: IntersectorWrapper;
  let fixture: ComponentFixture<IntersectorWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntersectorWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntersectorWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
