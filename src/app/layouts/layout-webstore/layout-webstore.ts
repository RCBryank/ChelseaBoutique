import { Component } from '@angular/core';
import { Menu } from "../../sections/menu/menu";
import { Footer } from "../../sections/footer/footer";

@Component({
  selector: 'app-layout-webstore',
  imports: [Menu, Footer],
  templateUrl: './layout-webstore.html',
  styleUrl: './layout-webstore.css'
})
export class LayoutWebstore {

}
