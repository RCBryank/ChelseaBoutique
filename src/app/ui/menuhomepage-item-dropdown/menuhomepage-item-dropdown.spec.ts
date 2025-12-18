import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhomepageItemDropdown } from './menuhomepage-item-dropdown';

describe('MenuhomepageItemDropdown', () => {
  let component: MenuhomepageItemDropdown;
  let fixture: ComponentFixture<MenuhomepageItemDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuhomepageItemDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuhomepageItemDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
