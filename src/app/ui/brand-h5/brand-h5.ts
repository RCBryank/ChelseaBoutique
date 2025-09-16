import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-brand-h5',
  imports: [NgClass],
  templateUrl: './brand-h5.html',
  styleUrl: './brand-h5.css'
})
export class BrandH5 {
  @Input() class = '';

  getClasses() {
    return ' ' + this.class;
  }
}
