import { Component } from '@angular/core';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";
import { Menu } from "../../sections/menu/menu";

@Component({
  selector: 'app-our-policies',
  imports: [LayoutWebstore, Menu],
  templateUrl: './our-policies.html',
  styleUrl: './our-policies.css'
})
export class OurPolicies {

}
