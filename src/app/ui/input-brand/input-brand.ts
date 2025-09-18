import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-brand',
  imports: [ReactiveFormsModule],
  templateUrl: './input-brand.html',
  styleUrl: './input-brand.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBrand),
      multi: true
    }
  ]
})
export class InputBrand implements ControlValueAccessor {
  @Input() Type = '';
  @Input() Label = '';
  @Input() LabelClasses = '';
  @Input() Classes = '';
  @Input() Accepts = '';
  @Input() Errors: ValidationErrors | null | undefined = null;
  @Input() PlaceholderText = '';
  @Input() DefaultValue: any | null;
  @Output() EventEmitterValueChanged = new EventEmitter<Event>();

  @ViewChild('inputhtmlelement') inputhtmlelement!: ElementRef;

  value: any = '';

  public onClick() {
    console.log("clicked");
  }

  getErrors(): string[] {
    let _errors = [];

    if (this.Errors) {
      if (this.Errors["required"])
        _errors.push("Es necesario llenar este campo.");
      if (this.Errors["minlength"])
        _errors.push("La cadena debe tener una longitud minima de " + this.Errors["minlength"].requiredLength + " caracteres.");
      if (this.Errors["email"])
        _errors.push("No se ha incluido un dominio de correo válido. Ejemplo: direccióndecorreo@email.com.");
      if (this.Errors["emailavailability"])
        _errors.push("Este correo ya esta en uso.");
      if (this.Errors["maxFileSizeAllow"])
        _errors.push("El tamaño maximo de carga es " + this.Errors["maxKbSizeAllowed"] + " KB");
    }

    return _errors;
  }

  writeValue(value: any) {
    this.value = value;
  }

  propagateChange = (_newvalue: any) => { };

  prechange(event: Event) {
    if (this.Type == "file") {
      const input = (event.target as HTMLInputElement);
      if (input.files) {
        this.value = input.files[0];
      }
    } else {
      this.value = (event.target as HTMLInputElement)?.value;
    }

    this.EventEmitterValueChanged.emit(event);
    this.propagateChange(this.value);
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

  public click(){
    this.inputhtmlelement?.nativeElement.click();
  }
}

