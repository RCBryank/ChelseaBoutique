import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { MenuItem } from './menu-item';

describe('MenuItem', () => {
  let component: MenuItem;
  let fixture: ComponentFixture<MenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItem, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
