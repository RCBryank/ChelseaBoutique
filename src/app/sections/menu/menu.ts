import { Component, Input, input, model } from '@angular/core';
import { MenuItem } from '../../ui/menu-item/menu-item';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  @Input() Show: boolean = false;

  Hide = model<boolean>(true);

  ngOnInit() {
    if (!this.Show) {
      this.Hide.set(true);
      setTimeout((() => {
        this.Hide.set(false);
      }), 1000);
    }

  }

  getClassList() {
    return " " + (this.Hide() ? "opacity-0 " : " ") + (this.Show ? "animate__slideInDown" : "animate__slideOutUp");
    //return " " + (this.Hide() ? "opacity-0 " : " ") + (this.Show ? "" : "");
  }
}
/**h-0 p-[0px] m-0 */