import { Component, ElementRef, Input, model, signal, SimpleChanges, ViewChild } from '@angular/core';
import { SvgSearch } from "../svg-search/svg-search";

@Component({
  selector: 'app-input-buscar-header',
  imports: [SvgSearch],
  templateUrl: './input-buscar-header.html',
  styleUrl: './input-buscar-header.css'
})
export class InputBuscarHeader {
  @ViewChild('inputsearchbar') inputsearchbar !: ElementRef;

  isFocused = model(false);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isFocused']) {
      const _isFocused = changes['isFocused'].currentValue;
      if (this.inputsearchbar != null) {
        const _inputelement = this.inputsearchbar.nativeElement as HTMLInputElement;
        if (_isFocused)
          _inputelement.focus();
        else
          _inputelement.blur();
      }
    }
  }
}
