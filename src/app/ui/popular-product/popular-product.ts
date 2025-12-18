import { Component } from '@angular/core';
import { IntersectorWrapper } from '../intersector-wrapper/intersector-wrapper';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-popular-product',
  imports: [NgClass],
  templateUrl: './popular-product.html',
  styleUrl: './popular-product.css'
})
export class PopularProduct extends IntersectorWrapper{
  override ValueThresold: number = .2;
}
