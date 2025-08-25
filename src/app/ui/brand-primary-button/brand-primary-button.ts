import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-brand-primary-button',
  imports: [NgClass],
  templateUrl: './brand-primary-button.html',
  styleUrl: './brand-primary-button.css'
})
export class BrandPrimaryButton {
  @Input() anexedclass = '';
  @Input() type = '';
  @Input() disabled: boolean = false;
  @Output() clickHandler = new EventEmitter<void>();

  clickEmmiter() {
    this.clickHandler.emit();
  }

  getClasses() {
    return ' ' + this.anexedclass;
  }
}
