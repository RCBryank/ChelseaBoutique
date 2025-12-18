import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuhomepage-item',
  imports: [],
  templateUrl: './menuhomepage-item.html',
  styleUrl: './menuhomepage-item.css'
})
export class MenuhomepageItem {

  @Input() AnnexedClasses: string = '';

  ClassesDecoratorHover: string = 'opacity-0';

  pointermouseover(e: any) {
    this.ClassesDecoratorHover = "animate__slideInLeft";
  }

  pointermouseout(e: any) {
    this.ClassesDecoratorHover = "animate__slideOutRight animate__faster";
  }

  getClassList() {
    return " " + this.AnnexedClasses;
  }
}
