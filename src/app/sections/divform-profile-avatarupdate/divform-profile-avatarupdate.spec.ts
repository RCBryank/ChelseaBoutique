import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivformProfileAvatarupdate } from './divform-profile-avatarupdate';

describe('DivformProfileAvatarupdate', () => {
  let component: DivformProfileAvatarupdate;
  let fixture: ComponentFixture<DivformProfileAvatarupdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivformProfileAvatarupdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivformProfileAvatarupdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
