import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-h3',
  imports: [NgClass],
  templateUrl: './brand-h3.html',
  styleUrl: './brand-h3.css'
})
export class BrandH3 {
  @Input() class = '';

  getClasses() {
    return ' ' + this.class;
  }
}
