import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BrandH3 } from "../../ui/brand-h3/brand-h3";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { InputBrand } from "../../ui/input-brand/input-brand";
import { FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-divform-signup-userdetails',
  imports: [BrandH3, BrandPrimaryButton, InputBrand, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './divform-signup-userdetails.html',
  styleUrl: './divform-signup-userdetails.css'
})
export class DivformSignupUserdetails {
  @Input() Show = true;
  @Output() EventEmitterButtonNext = new EventEmitter<void>();
  @Input() divformgroup: FormGroup = new FormGroup([]);

  buttonNext() {
    this.EventEmitterButtonNext.emit();
  }

  getClass() {
    return this.Show ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut h-64 overflow-hidden absolute w-full pointer-events-none top-0';
  }
}
