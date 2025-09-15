import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { BrandH3 } from "../../ui/brand-h3/brand-h3";
import { InputBrand } from "../../ui/input-brand/input-brand";
import { FormControl, ReactiveFormsModule, FormGroup, ɵInternalFormsSharedModule } from "@angular/forms";
import { InputPasswordBrand } from "../../ui/input-password-brand/input-password-brand";
import { Avatarimg } from "../../ui/avatarimg/avatarimg";

@Component({
  selector: 'app-divform-signup-credentials',
  imports: [BrandPrimaryButton, BrandH3, InputBrand, ɵInternalFormsSharedModule, ReactiveFormsModule, InputPasswordBrand, Avatarimg],
  templateUrl: './divform-signup-credentials.html',
  styleUrl: './divform-signup-credentials.css'
})
export class DivformSignupCredentials {
  @Input() Show = false;
  @Output() EventEmitterButtonPrevious = new EventEmitter<void>();
  @Input() divformGroup: FormGroup = new FormGroup([]);
  @Input() isFormonSubmit: boolean = false;

  ImgAvatarSrc: string = "";

  ngOnInit() {
    this.divformGroup.get("Credentials.AvatarProfile")?.valueChanges.subscribe((value) => this.getAvatarFile(value))
  }

  getClass() {
    return this.Show ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut absolute pointer pointer-events-none h-0 top-0 w-full';
  }

  buttonPrevNext() {
    this.EventEmitterButtonPrevious.emit();
  }

  getAvatarFile(file: any) {
    if (file) {
      const urlstring = URL.createObjectURL(file);
      this.ImgAvatarSrc = urlstring;
    } else {
      this.ImgAvatarSrc = "";
    }
  }
}
