import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomepage } from './menu-homepage';

describe('MenuHomepage', () => {
  let component: MenuHomepage;
  let fixture: ComponentFixture<MenuHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
