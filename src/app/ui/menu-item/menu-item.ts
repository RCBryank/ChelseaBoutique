import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  listClasses = input('font-bold cursor-pointer');
  href = input<string>('');
}
