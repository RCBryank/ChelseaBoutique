import { Component, createComponent, inject, OnInit } from '@angular/core';
import { DivformSignupUserdetails } from "../../sections/divform-signup-userdetails/divform-signup-userdetails";
import { DivformSignupCredentials } from "../../sections/divform-signup-credentials/divform-signup-credentials";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { WebUser } from '../../models/web-user.model';
import { SYSTEM_MESSAGES } from '../../constants/system-messages';
import { ModalInfoBrand } from '../../ui/modal-info-brand/modal-info-brand';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ModalInfo } from '../../constants/interfaces';
import { ModalType } from '../../constants/types';
import { ValidateFileSize } from '../../customvalidators/validatorfilemaxsize';

@Component({
  selector: 'app-signup',
  imports: [DivformSignupUserdetails, DivformSignupCredentials, ReactiveFormsModule, ModalInfoBrand, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  CurrentFormIndex = 1;

  formSignUp = inject(AuthService);

  formWebUser: FormGroup = new FormGroup([]);

  ShowModal: boolean = false;

  FormonSubmit: boolean = false;

  ModalResultSubmit: ModalInfo = {
    ModalType: ModalType.DEBUG,
    Show: false,
    TitleModal: '',
    MessageModal: '',
    TextPrimaryAction: '',
    PrimaryAction: () => { }
  }

  private router = inject(Router);

  ngOnInit() {
    this.formWebUser = new FormGroup(
      {
        UserDetails: new FormGroup({
          Name: new FormControl<string>(''),
          MiddleName: new FormControl<string>(''),
          LastName: new FormControl<string>(''),
          DateofBirth: new FormControl<string | null>(null),
          Address: new FormControl<string>(''),
          PostalCode: new FormControl<string>(''),
          City: new FormControl<string>(''),
          Country: new FormControl<string>(''),
          Phone: new FormControl<string>(''),
          Phone2: new FormControl<string>('')
        }),
        Credentials: new FormGroup({
          Email: new FormControl<string>(''),
          WebUserPassword: new FormControl<string>(''),
          AvatarProfile: new FormControl<File | null>(null, [ValidateFileSize(240000)])
        })
      });
  }


  GetCurrentFormIndex() {
    return this.CurrentFormIndex;
  }

  ValidateWebUserPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const specialcharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      const hasSpecialCharacters = specialcharacters.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacters;

      return !passwordValid ? { passwordStrength: true } : null;
    }
  }

  static ValidateEmailAvailability(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value)
        return null;

      return { emailavailability: true };
    }
  }

  ValidateUserDetails() {

    this.formWebUser.get("UserDetails.Name")?.addValidators([Validators.required])
    this.formWebUser.get("UserDetails.Name")?.updateValueAndValidity();

    if (this.formWebUser.get('UserDetails')?.valid == false)
      return;

    this.NavigatetoForm(2);
  }

  NavigatetoForm(formindex: number) {
    this.CurrentFormIndex = formindex;
  }

  getFormSubmitStatus() {
    return this.FormonSubmit;
  }

  SubmitHandler(e: SubmitEvent): void {

    this.FormonSubmit = true;

    this.formWebUser.get("Credentials.Email")?.addValidators([Validators.required, Validators.email])
    this.formWebUser.get("Credentials.Email")?.updateValueAndValidity();

    this.formWebUser.get("Credentials.WebUserPassword")?.addValidators([Validators.required, Validators.minLength(6), this.ValidateWebUserPassword()])
    this.formWebUser.get("Credentials.WebUserPassword")?.updateValueAndValidity();

    if (!this.formWebUser.valid) {
      this.FormonSubmit = false;
      return;
    }
    

    const formdata = new FormGroup({
      Name: new FormControl(this.formWebUser.get("UserDetails.Name")?.value),
      MiddleName: new FormControl<string>(this.formWebUser.get("UserDetails.MiddleName")?.value),
      LastName: new FormControl<string>(this.formWebUser.get("UserDetails.LastName")?.value),
      DateofBirth: new FormControl<string | null>(this.formWebUser.get("UserDetails.DateofBirth")?.value),
      Address: new FormControl<string>(this.formWebUser.get("UserDetails.Address")?.value),
      PostalCode: new FormControl<string>(this.formWebUser.get("UserDetails.PostalCode")?.value),
      City: new FormControl<string>(this.formWebUser.get("UserDetails.City")?.value),
      Country: new FormControl<string>(this.formWebUser.get("UserDetails.Country")?.value),
      PhoneNumber: new FormControl<string>(this.formWebUser.get("UserDetails.Phone")?.value),
      PhoneNumber2: new FormControl<string>(this.formWebUser.get("UserDetails.Phone2")?.value),
      Email: new FormControl<string>(this.formWebUser.get("Credentials.Email")?.value),
      WebUserPassword: new FormControl<string>(this.formWebUser.get("Credentials.WebUserPassword")?.value),
      WebUserPasswordSalt: new FormControl<string>('')
    })

    console.log(this.formWebUser.get("Credentials.AvatarProfile")?.value);

    this.formSignUp.StoreWebUser(formdata.value as WebUser, this.formWebUser.get("Credentials.AvatarProfile")?.value).subscribe({
      next: (response) => {
        this.ModalResultSubmit.ModalType = ModalType.INFO;
        this.ModalResultSubmit.Show = true;
        this.ModalResultSubmit.TitleModal = SYSTEM_MESSAGES["SignUp_SuccessTitle"]
        this.ModalResultSubmit.MessageModal = SYSTEM_MESSAGES["SignUp_SuccessMessage"]
        this.ModalResultSubmit.TextPrimaryAction = 'Regresar';
        this.ModalResultSubmit.DebugMessage = response;
        this.ModalResultSubmit.PrimaryAction = () => { this.SubmitForm_Success(); }
      },
      error: (response) => {
        switch (response.error.code) {
          case "23505":
            const _validatoremail = Signup.ValidateEmailAvailability();
            this.formWebUser.get("Credentials.Email")?.addValidators(_validatoremail);
            this.formWebUser.get("Credentials.Email")?.updateValueAndValidity();
            const _sub = this.formWebUser.get("Credentials.Email")?.valueChanges.subscribe((res) => {
              _sub?.unsubscribe();
              this.formWebUser.get("Credentials.Email")?.removeValidators(_validatoremail);
              this.formWebUser.get("Credentials.Email")?.updateValueAndValidity();
            })
            break;
          default:
            this.ModalResultSubmit.ModalType = ModalType.DEBUG;
            this.ModalResultSubmit.Show = true;
            this.ModalResultSubmit.TitleModal = SYSTEM_MESSAGES["SignUp_ErrorTitle"];
            this.ModalResultSubmit.MessageModal = SYSTEM_MESSAGES["SignUp_ErrorMessage"];
            this.ModalResultSubmit.TextPrimaryAction = 'Regresar';
            this.ModalResultSubmit.DebugMessage = response;
            this.ModalResultSubmit.PrimaryAction = () => { this.SubmitForm_Error(); }
            break;
        }
        this.FormonSubmit = false;
      },
      complete: () => {
        this.FormonSubmit = false;
      }
    });
  }

  SubmitForm_Success() {
    this.router.navigateByUrl("");
  }

  SubmitForm_Error() {
    this.ModalResultSubmit.Show = false;
  }
}
