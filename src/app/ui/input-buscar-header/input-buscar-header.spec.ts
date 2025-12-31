import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscarHeader } from './input-buscar-header';

describe('InputBuscarHeader', () => {
  let component: InputBuscarHeader;
  let fixture: ComponentFixture<InputBuscarHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBuscarHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBuscarHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
