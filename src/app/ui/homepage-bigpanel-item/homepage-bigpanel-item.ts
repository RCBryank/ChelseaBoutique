import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-bigpanel-item',
  imports: [NgClass],
  templateUrl: './homepage-bigpanel-item.html',
  styleUrl: './homepage-bigpanel-item.css'
})
export class HomepageBigpanelItem {

  MouseOver: boolean = false;

  MouseOverHandler(e: MouseEvent) {
    this.MouseOver = true;
  }

  MouseLeaveHandler(e: MouseEvent) {
    this.MouseOver = false;
  }
}
