import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBigpanelItem } from './homepage-bigpanel-item';

describe('HomepageBigpanelItem', () => {
  let component: HomepageBigpanelItem;
  let fixture: ComponentFixture<HomepageBigpanelItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageBigpanelItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageBigpanelItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
