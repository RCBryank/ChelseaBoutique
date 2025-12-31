import { Component, Input, input, model } from '@angular/core';
import { MenuItem } from '../../ui/menu-item/menu-item';
import { InputBrand } from "../../ui/input-brand/input-brand";
import { InputBuscarHeader } from "../../ui/input-buscar-header/input-buscar-header";
import { NgClass } from '@angular/common';
import { MenuItemBuscar } from "../../ui/menu-item-buscar/menu-item-buscar";

@Component({
  selector: 'app-menu',
  imports: [MenuItem, InputBuscarHeader, NgClass, MenuItemBuscar],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  @Input() Show: boolean = false;
  Hide = model<boolean>(true);

  SearchBarBeginHide: boolean = true;
  ShowSearchBar: boolean = false;

  ngOnInit() {
    if (!this.Show) {
      this.Hide.set(true);
      setTimeout((() => {
        this.Hide.set(false);
      }), 1000);
    } else {
      this.Hide.set(false);
    }

    setTimeout(() => {
      this.SearchBarBeginHide = false;
    }, 1000)
  }

  getClassList() {
    return " " + (this.Hide() ? "opacity-0 " : " ") + (this.Show ? "animate__slideInDown" : "animate__slideOutUp");
  }

  toogleShowSearchBar(show: boolean) {
    this.ShowSearchBar = show;
  }
}
