import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-brand-h4',
  imports: [NgClass],
  templateUrl: './brand-h4.html',
  styleUrl: './brand-h4.css'
})
export class BrandH4 {
  @Input() class = '';

  getClasses() {
    return ' ' + this.class;
  }
}
