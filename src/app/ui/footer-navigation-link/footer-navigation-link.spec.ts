import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationLink } from './footer-navigation-link';

describe('FooterNavigationLink', () => {
  let component: FooterNavigationLink;
  let fixture: ComponentFixture<FooterNavigationLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNavigationLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavigationLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
