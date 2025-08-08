import { Component, input } from '@angular/core';
import { MenuItem } from '../../ui/menu-item/menu-item';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  value = input<number>(0)
}
