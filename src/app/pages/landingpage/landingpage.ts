import { Component } from '@angular/core';
import { BrandH3 } from "../../ui/brand-h3/brand-h3";
import { InputLine } from "../../ui/input-line/input-line";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";

@Component({
  selector: 'app-landingpage',
  imports: [BrandH3, InputLine, BrandPrimaryButton],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css'
})
export class Landingpage {

}
