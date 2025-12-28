import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-quantity-brand',
  imports: [],
  templateUrl: './input-quantity-brand.html',
  styleUrl: './input-quantity-brand.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputQuantityBrand),
      multi: true
    }
  ]
})
export class InputQuantityBrand implements ControlValueAccessor {
  @Input() minnumber = 0;
  @Input() maxnumber = 0;

  value: number = 0;

  ngAfterContentInit() {
    this.value = this.minnumber;
  }

  IncrementValue(increment: number) {
    const _newvalue = this.value + increment;
    if (_newvalue >= this.minnumber && _newvalue <= this.maxnumber) {
      this.value += increment;
      this.propagateChange(this.value);
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  propagateChange = (newvalue: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }
}
