import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BrandH5 } from "../../ui/brand-h5/brand-h5";
import { InputPasswordBrand } from "../../ui/input-password-brand/input-password-brand";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidateWebUserMatch } from '../../customvalidators/validatorwebuserpasswordmatch';
import { GetMessageErrors } from '../../constants/system-messages';
import { ValidateWebUserPasswordPattern } from '../../customvalidators/validatorwebuserpasswordpattern';
import { AuthService } from '../../services/auth-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  imports: [BrandH5, InputPasswordBrand, ReactiveFormsModule, BrandPrimaryButton],
  templateUrl: './changepassword.html',
  styleUrl: './changepassword.css'
})
export class Changepassword {

  authService = inject(AuthService);

  private Hidden: boolean = true;

  @Input() Show = false;
  @Input() HideModalHandler = null;

  @Output() EventHideHandler = new EventEmitter<void>();
  @Output() EventFormResult = new EventEmitter<HttpErrorResponse | null>();

  @Input() set SetShow(value: boolean) {
    this.Show = value;
    const _dombody = document.getElementsByTagName("body")[0];
    if (value) {
      _dombody?.classList.add("overflow-hidden");
      this.formUpdatePassword.get("WebUserPassword")?.reset();
      this.formUpdatePassword.get("ConfirmWebUserPassword")?.reset();
    }
    else
      _dombody?.classList.remove("overflow-hidden");
  }

  formUpdatePassword = new FormGroup({
    WebUserPassword: new FormControl<string>('', [Validators.required, ValidateWebUserPasswordPattern]),
    ConfirmWebUserPassword: new FormControl<string>('', [Validators.required])
  }, { validators: ValidateWebUserMatch });

  ngOnInit() {
    this.Hidden = !this.Show;

    if (this.Hidden == true) {
      setTimeout(() => {
        this.Hidden = false;
      }, 500);
    }
  }

  getBackgroundClassList() {
    return this.Show ? "backdrop-blur-[4px]" : "";
  }

  getClassList() {

    let list = this.Show ? " animate__fadeInDown " : " animate__fadeOutUp ";
    list += this.Hidden ? "" : "visible";

    return list;
  }

  hideModal() {
    this.EventHideHandler.emit();
  }

  FormUpdatePasswordSubmit(e: SubmitEvent): void {
    e.preventDefault();

    if (this.formUpdatePassword.valid == false)
      return;

    this.authService.UpdatePassword(this.formUpdatePassword.get('WebUserPassword')?.value || "").subscribe({
      next: (response) => {
        this.EventFormResult.emit(null);
      },
      error: (response) => {
        this.EventFormResult.emit(response);
      },
      complete: () => {

      }
    })
  }

  getFormErrors(): string[] {
    return GetMessageErrors(this.formUpdatePassword.errors);
  }
}
