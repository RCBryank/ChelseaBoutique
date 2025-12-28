import { NgClass } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { GetMessageErrors } from '../../constants/system-messages';

@Component({
  selector: 'app-input-line',
  imports: [NgClass],
  templateUrl: './input-line.html',
  styleUrl: './input-line.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLine),
      multi: true
    }
  ],
})

export class InputLine implements ControlValueAccessor {
  @Input() class = '';
  @Input() type = 'text';
  @Input() Errors: ValidationErrors | null | undefined = null;

  value: any = '';

  getErrors(): string[] {
    return GetMessageErrors(this.Errors);
  }

  getClasses() {
    return ' ' + this.class;
  }

  writeValue(value: any) {
    this.value = value;
  }

  propagateChange = (_newvalue: any) => { };

  prechange(event: Event) {
    this.value = (event.target as HTMLInputElement)?.value;
    this.propagateChange((event.target as HTMLInputElement)?.value)
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }
}
