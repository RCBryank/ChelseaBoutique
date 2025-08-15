import { Component, Inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-linkbrandlandingpage',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './linkbrandlandingpage.html',
  styleUrl: './linkbrandlandingpage.css'
})
export class Linkbrandlandingpage {
  @Input() Link = '';

  getLink() {
    return this.Link;
  }
}
