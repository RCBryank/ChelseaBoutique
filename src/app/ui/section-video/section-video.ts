import { NgClass } from '@angular/common';
import { afterNextRender, Component, computed, ElementRef, EventEmitter, input, Output, Signal, signal, ViewChild } from '@angular/core';
import { IntersectorWrapper } from '../intersector-wrapper/intersector-wrapper';


@Component({
  selector: 'app-section-video',
  imports: [NgClass],
  templateUrl: './section-video.html',
  styleUrl: './section-video.css'
})
export class SectionVideo extends IntersectorWrapper {

  @ViewChild('VideoElement') RefVideoElement !: ElementRef;


  
  constructor() {
    super();
    afterNextRender({
      write: () => {
        const _videoelement = (this.RefVideoElement.nativeElement) as HTMLVideoElement;
        _videoelement.muted = true;
        _videoelement.play();
      }
    })
  }
}
