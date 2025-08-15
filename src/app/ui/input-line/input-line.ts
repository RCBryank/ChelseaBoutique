import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-line',
  imports: [NgClass],
  templateUrl: './input-line.html',
  styleUrl: './input-line.css'
})
export class InputLine {
  @Input() class = '';
  @Input() type = 'text';

  getClasses() {
    return ' ' + this.class;
  }
}
