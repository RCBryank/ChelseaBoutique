import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagepreviewSlideshow } from './product-imagepreview-slideshow';

describe('ProductImagepreviewSlideshow', () => {
  let component: ProductImagepreviewSlideshow;
  let fixture: ComponentFixture<ProductImagepreviewSlideshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImagepreviewSlideshow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagepreviewSlideshow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
