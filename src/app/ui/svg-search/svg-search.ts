import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-search',
  imports: [],
  templateUrl: './svg-search.html',
  styleUrl: './svg-search.css'
})
export class SvgSearch {
  @Input() StrokeColor: string = "#000000";
}
