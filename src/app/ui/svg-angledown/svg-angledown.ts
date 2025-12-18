import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-angledown',
  imports: [],
  templateUrl: './svg-angledown.html',
  styleUrl: './svg-angledown.css'
})
export class SvgAngledown {
  @Input() AnnexedClasses = '';

  getClassList(){
    return " " + this.AnnexedClasses;
  }
}
