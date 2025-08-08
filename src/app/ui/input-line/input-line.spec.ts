import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLine } from './input-line';

describe('InputLine', () => {
  let component: InputLine;
  let fixture: ComponentFixture<InputLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
