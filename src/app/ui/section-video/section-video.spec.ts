import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo } from './section-video';

describe('SectionVideo', () => {
  let component: SectionVideo;
  let fixture: ComponentFixture<SectionVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
