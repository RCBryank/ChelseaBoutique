import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-bigpanel-item',
  imports: [NgClass],
  templateUrl: './homepage-bigpanel-item.html',
  styleUrl: './homepage-bigpanel-item.css'
})
export class HomepageBigpanelItem {

  @Input() Image1: string = "";
  @Input() Image2: string = "";

  MouseOver: boolean = false;

  MouseOverHandler(e: MouseEvent) {
    this.MouseOver = true;
  }

  MouseLeaveHandler(e: MouseEvent) {
    this.MouseOver = false;
  }
}
