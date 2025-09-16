import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatarimg',
  imports: [],
  templateUrl: './avatarimg.html',
  styleUrl: './avatarimg.css'
})
export class Avatarimg {
  @Input() AnexedClasses = "";
  @Input() ImgSrc = "";

  getClasses() {
    return this.AnexedClasses;
  }

  getImgSrc() {
    return this.ImgSrc == "" ? "/images/Resources/DefaultAvatarProfile.png" : this.ImgSrc;
  }
}
