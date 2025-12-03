import { Component } from '@angular/core';
import { Footer } from "../../sections/footer/footer";
import { MenuHomepage } from "../../sections/menu-homepage/menu-homepage";

@Component({
  selector: 'app-homepage',
  imports: [Footer, MenuHomepage],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
