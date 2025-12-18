import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-password-brand',
  imports: [],
  templateUrl: './input-password-brand.html',
  styleUrl: './input-password-brand.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordBrand),
      multi: true
    }
  ]
})
export class InputPasswordBrand implements ControlValueAccessor {
  @Input() Type = 'password';
  @Input() Label = '';
  @Input() LabelClasses = '';
  @Input() Classes = '';
  @Input() Errors: ValidationErrors | null | undefined = null;
  @Input() PlaceholderText = '';

  value: string = '';
  showpassword: boolean = false;

  getErrors(): string[] {
    let _errors = [];

    if (this.Errors) {
      if (this.Errors["required"])
        _errors.push("Es necesario llenar este campo");
      if (this.Errors["minlength"])
        _errors.push("La cadena debe tener una longitud minima de " + this.Errors["minlength"].requiredLength + " caracteres");
      if (this.Errors["passwordStrength"])
        _errors.push("La contraseña debe cumplir con el formato de seguridad");
    }

    return _errors;
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

  getLabelClasses() {
    return this.LabelClasses;
  }

  getClasses() {
    return this.Classes + ' ';
  }

  toogleshowpassword() {
    this.showpassword = !this.showpassword;
    this.Type = this.showpassword ? "text" : "password";
  }
}
