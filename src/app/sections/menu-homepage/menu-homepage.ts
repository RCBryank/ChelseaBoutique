import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Menu } from "../menu/menu";
import { MenuhomepageItem } from "../../ui/menuhomepage-item/menuhomepage-item";
import { MenuhomepageItemDropdown } from "../../ui/menuhomepage-item-dropdown/menuhomepage-item-dropdown";

@Component({
  selector: 'app-menu-homepage',
  imports: [Menu, MenuhomepageItem, MenuhomepageItemDropdown],
  templateUrl: './menu-homepage.html',
  styleUrl: './menu-homepage.css'
})
export class MenuHomepage {
  ShowHomePageTopBar: boolean = true;


  @ViewChild('divDetectorHomePageTopbar') divDetectorHomePageTopbar!: ElementRef;
  @ViewChild('topbarHomePage') topbarHomePage!: MenuhomepageItemDropdown;

  ngOnInit() {
    document.addEventListener("scroll", (e) => {
      this.isHomeTopBaronView(window.scrollY);
    })
  }

  isHomeTopBaronView(y: Number) {
    const _top = this.divDetectorHomePageTopbar.nativeElement.getBoundingClientRect().top;
    const _height = this.divDetectorHomePageTopbar.nativeElement.getBoundingClientRect().height;

    this.ShowHomePageTopBar = _height > (_top * -1);
    if (this.ShowHomePageTopBar!)
      this.topbarHomePage.HideTopBar();
  }

  getClassList() {
    return " " + (this.ShowHomePageTopBar ? "animate__slideInDown" : "-top-6");
  }
}
