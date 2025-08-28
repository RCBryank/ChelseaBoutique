import { Component } from '@angular/core';
import { LayoutWebstore } from '../../layouts/layout-webstore/layout-webstore';

@Component({
  selector: 'app-homepage',
  imports: [LayoutWebstore],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

  Name: string | null = '';

  ngOnInit() {
    this.Name = localStorage.getItem("Name");
  }
}
