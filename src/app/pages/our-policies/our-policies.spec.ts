import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPolicies } from './our-policies';

describe('OurPolicies', () => {
  let component: OurPolicies;
  let fixture: ComponentFixture<OurPolicies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPolicies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPolicies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
