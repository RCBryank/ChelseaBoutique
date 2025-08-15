import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-primary-button',
  imports: [NgClass],
  templateUrl: './brand-primary-button.html',
  styleUrl: './brand-primary-button.css'
})
export class BrandPrimaryButton {
  @Input() anexedclass = '';
  @Input() type = '';

  getClasses() {
    return ' ' + this.anexedclass;
  }
}
