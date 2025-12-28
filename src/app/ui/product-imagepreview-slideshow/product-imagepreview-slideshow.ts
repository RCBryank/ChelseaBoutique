import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-product-imagepreview-slideshow',
  imports: [ɵInternalFormsSharedModule, NgClass],
  templateUrl: './product-imagepreview-slideshow.html',
  styleUrl: './product-imagepreview-slideshow.css'
})
export class ProductImagepreviewSlideshow {
  @Input() Images: string[] = [];

  indexImage: number;
  nextImage: number;
  intervalChange: number = 4000;
  beginAnimation: boolean = false;
  stopAnimation: boolean = false;

  intervalSlideshow: any = null;


  constructor() {
    this.indexImage = 0;
    this.nextImage = this.indexImage + 1;
    if (this.nextImage >= this.Images.length)
      this.nextImage = 0;
  }

  ngOnInit() {
    if (this.Images.length > 1) {
      this.intervalSlideshow = setInterval(() => {
        console.log("tick");
        this.beginAnimation = true;
        this.indexImage = this.nextImage;
        this.nextImage++;
        if (this.nextImage >= this.Images.length) {
          this.nextImage = 0;
        }
        setTimeout(() => {
          this.beginAnimation = false;
        }, 1500);
      }, this.intervalChange);
    }
  }

  HandlerClickImage(index: number) {
    this.stopAnimation = true;
    this.beginAnimation = false;
    this.indexImage = this.nextImage;
    setTimeout(() => {
      this.beginAnimation = true;
      this.nextImage = index;
    }, 100);

    clearInterval(this.intervalSlideshow);
  }
}


//-- Div Img 1 = 0;   ->    Div Img 1 = 1;
//-- Div Img 2 = 1;   ->    Div Img 2 = 2;