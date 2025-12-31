import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemBuscar } from './menu-item-buscar';

describe('MenuItemBuscar', () => {
  let component: MenuItemBuscar;
  let fixture: ComponentFixture<MenuItemBuscar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemBuscar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemBuscar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
