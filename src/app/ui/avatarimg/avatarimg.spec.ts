import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatarimg } from './avatarimg';

describe('Avatarimg', () => {
  let component: Avatarimg;
  let fixture: ComponentFixture<Avatarimg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avatarimg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Avatarimg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
