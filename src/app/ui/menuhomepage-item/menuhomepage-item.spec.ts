import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhomepageItem } from './menuhomepage-item';

describe('MenuhomepageItem', () => {
  let component: MenuhomepageItem;
  let fixture: ComponentFixture<MenuhomepageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuhomepageItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuhomepageItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
