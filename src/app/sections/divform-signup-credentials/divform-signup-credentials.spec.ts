import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivformSignupCredentials } from './divform-signup-credentials';

describe('DivformSignupCredentials', () => {
  let component: DivformSignupCredentials;
  let fixture: ComponentFixture<DivformSignupCredentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivformSignupCredentials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivformSignupCredentials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
