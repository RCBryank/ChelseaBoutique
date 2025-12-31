import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, NgClass],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  @Input() AnexedClasses: string = '';
  @Input() Href: string = '';

  MouseOver: boolean = false;

  getClasses() {
    return this.AnexedClasses;
  }

  MouseOverHandler(event: any) {
    this.MouseOver = true;
  }

  MouseOutHandler(event: any) {
    this.MouseOver = false;
  }
}
