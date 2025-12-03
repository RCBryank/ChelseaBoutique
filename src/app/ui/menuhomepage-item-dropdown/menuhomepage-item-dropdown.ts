import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SvgAngledown } from "../svg-angledown/svg-angledown";

@Component({
  selector: 'app-menuhomepage-item-dropdown',
  imports: [SvgAngledown],
  templateUrl: './menuhomepage-item-dropdown.html',
  styleUrl: './menuhomepage-item-dropdown.css'
})
export class MenuhomepageItemDropdown {
  @Input() Visible: boolean = true;
  @Input() Label: string = '';
  @ViewChild('buttonDropdown') ButtonDropdown!: ElementRef;
  @ViewChild('divDropdown') DivDropdown!: ElementRef;

  ShowDropdown: boolean = false;

  ngOnInit() {
    if (this.Visible) {
      setTimeout(() => {
        this.Visible = false;
      }, 1000)
    }
  }

  GetDropdownClassList() {
    return " " + (this.Visible ? "invisible " : " ") + (this.ShowDropdown ? "animate__fadeInDown top-9" : "animate__fadeOutUp top-0");
  }

  AddListenerDropdownShow(delay: number) {
    setTimeout(() => {
      document.addEventListener("click", (e: any) => { this.DetectClickElement(e); }, { once: true })
    }, delay)
  }

  DetectClickElement(e: any) {
    if (e != null && this.DivDropdown.nativeElement.contains(e.srcElement)) {
      this.AddListenerDropdownShow(100);
    } else {
      this.ShowDropdown = false;
    }
  }

  public HideTopBar() {
    if (this.ShowDropdown) {
      this.ButtonDropdown.nativeElement.click();
    }
  }

  public Click() {
    const _show = !this.ShowDropdown;

    if (_show)
      this.AddListenerDropdownShow(500);

    this.ShowDropdown = _show;
  }
}
