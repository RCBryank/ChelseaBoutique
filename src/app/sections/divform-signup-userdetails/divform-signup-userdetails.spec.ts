import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivformSignupUserdetails } from './divform-signup-userdetails';

describe('DivformSignupUserdetails', () => {
  let component: DivformSignupUserdetails;
  let fixture: ComponentFixture<DivformSignupUserdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivformSignupUserdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivformSignupUserdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
