import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { IntersectorWrapper } from '../intersector-wrapper/intersector-wrapper';

@Component({
  selector: 'app-popular-product-right',
  imports: [NgClass],
  templateUrl: './popular-product-right.html',
  styleUrl: './popular-product-right.css'
})
export class PopularProductRight extends IntersectorWrapper {
  override ValueThresold: number = .1;
}
