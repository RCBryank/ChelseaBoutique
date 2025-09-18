import { Component, ElementRef, EventEmitter, inject, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidateFileSize } from '../../customvalidators/validatorfilemaxsize';
import { environment } from '../../../environments/environment.development';
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { AuthService } from '../../services/auth-service';
import { HttpErrorResponse } from '@angular/common/http';
import { WebUserAuthenticatedInfo } from '../../constants/interfaces';
import { InputBrand } from "../../ui/input-brand/input-brand";
import { GetMessageErrors } from '../../constants/system-messages';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-divform-profile-avatarupdate',
  imports: [ReactiveFormsModule, BrandPrimaryButton, InputBrand],
  templateUrl: './divform-profile-avatarupdate.html',
  styleUrl: './divform-profile-avatarupdate.css'
})
export class DivformProfileAvatarupdate {

  @ViewChild('inputfileChangeProfileAvatar') inputfileChangeProfileAvatar!: InputBrand;

  @Output() eventActualizeProfileAvatar = new EventEmitter<string>();
  @Output() eventFormResult = new EventEmitter<HttpErrorResponse | null>();

  serviceAuth = inject(AuthService);

  formProfileAvatar: FormGroup = new FormGroup({
    AvatarProfileFile: new FormControl<File | null>(null)
  });

  FormonRequest: boolean = false;

  ngOnInit() {
    this.formProfileAvatar.valueChanges.subscribe({
      next: (value) => this.FormAvatarUpdateHandleSubmit(value)
    })
  }

  ClickBeginProfileAvatarChangeHandler() {
    this.formProfileAvatar.get('AvatarProfileFile')?.addValidators([Validators.required, ValidateFileSize(environment.avatarprofileMaxBytesSize)]);
    this.formProfileAvatar.get('AvatarProfileFile')?.updateValueAndValidity();
    this.inputfileChangeProfileAvatar.click();
  }

  FormAvatarUpdateHandleSubmit(value: any) {

    if (this.formProfileAvatar.valid == false)
      return;

    this.FormonRequest = true;

    this.serviceAuth.UpdateProfileAvatar(value['AvatarProfileFile'])
      .pipe(finalize(() => {
        this.FormonRequest = false;
        this.formProfileAvatar.get('AvatarProfileFile')?.setValue(null);
        this.formProfileAvatar.get('AvatarProfileFile')?.clearValidators();
        this.formProfileAvatar.get('AvatarProfileFile')?.setErrors(null);
      }))
      .subscribe({
        next: (response) => {
          const newinfo: WebUserAuthenticatedInfo = this.serviceAuth.GetWebUserAuthenticatedInfo();
          newinfo.ProfilePhoto = response["PublicPath"];
          this.serviceAuth.StoreWebUserAuthenticatedInfo(newinfo);
          this.eventActualizeProfileAvatar.emit(newinfo.ProfilePhoto);
        },
        error: (error) => {
          this.eventFormResult.emit(error);
        },
        complete: () => {
        }
      });
  }

  GetFormAvatarUpdateErrors(): string[] {
    return GetMessageErrors(this.formProfileAvatar.get('AvatarProfileFile')?.errors);
  }
}
