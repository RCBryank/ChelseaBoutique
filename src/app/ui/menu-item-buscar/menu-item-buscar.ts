import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item-buscar',
  imports: [NgClass],
  templateUrl: './menu-item-buscar.html',
  styleUrl: './menu-item-buscar.css'
})
export class MenuItemBuscar {
  MouseOver: boolean = false;
  ShowSearchBar: boolean = false;

  @Output() event_ToogleShowSearchBar = new EventEmitter<boolean>();

  MouseOverHandler(event: any) {
    this.MouseOver = true;
  }

  MouseOutHandler(event: any) {
    this.MouseOver = false;
  }

  toogleShowSearchBar() {
    this.ShowSearchBar = !this.ShowSearchBar;
    this.event_ToogleShowSearchBar.emit(this.ShowSearchBar);
  }
}
