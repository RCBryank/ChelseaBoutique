import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWebstore } from './layout-webstore';

describe('LayoutWebstore', () => {
  let component: LayoutWebstore;
  let fixture: ComponentFixture<LayoutWebstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWebstore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutWebstore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
