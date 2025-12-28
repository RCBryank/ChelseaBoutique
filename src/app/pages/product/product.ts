import { Component } from '@angular/core';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";
import { BrandH5 } from "../../ui/brand-h5/brand-h5";
import { BrandH2 } from "../../ui/brand-h2/brand-h2";
import { BrandP } from "../../ui/brand-p/brand-p";
import { InputQuantityBrand } from "../../ui/input-quantity-brand/input-quantity-brand";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductImagepreviewSlideshow } from "../../ui/product-imagepreview-slideshow/product-imagepreview-slideshow";

@Component({
  selector: 'app-product',
  imports: [LayoutWebstore, BrandH5, BrandH2, BrandP, InputQuantityBrand, BrandPrimaryButton, ReactiveFormsModule, ProductImagepreviewSlideshow],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  ProductImages : string[] = [];

  constructor(){
    this.ProductImages = ["/images/Resources/num_1.jpg", "/images/Resources/num_2.jpg", "/images/Resources/num_3.jpg"];
  }

  formGroup = new FormGroup({
    cartquantity: new FormControl<number>(0)
  })

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.formGroup.value);
  }
}
