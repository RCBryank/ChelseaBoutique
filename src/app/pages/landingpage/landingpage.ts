import { Component, inject } from '@angular/core';
import { BrandH3 } from "../../ui/brand-h3/brand-h3";
import { InputLine } from "../../ui/input-line/input-line";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { SignInForm, WebUserAuthenticatedInfo } from '../../constants/interfaces';
import { SYSTEM_MESSAGES } from '../../constants/system-messages';
import { Linkbrandlandingpage } from '../../ui/linkbrandlandingpage/linkbrandlandingpage';

@Component({
  selector: 'app-landingpage',
  imports: [BrandH3, InputLine, BrandPrimaryButton, ReactiveFormsModule,Linkbrandlandingpage],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css'
})
export class Landingpage {

  FailedAuthenticationMessage: string | null = null;

  formdata = new FormGroup({
    Email: new FormControl<string>(''),
    Password: new FormControl<string>('')
  })

  formSignIn = inject(AuthService)

  SubmitHandler(e: SubmitEvent): void {

    this.formdata.get("Email")?.addValidators([Validators.required, Validators.email])
    this.formdata.get("Password")?.addValidators([Validators.required])
    this.formdata.get("Email")?.updateValueAndValidity();

    if (!this.formdata.valid)
      return;

    this.formSignIn.SignIn(this.formdata.value as SignInForm).subscribe({
      next: (response: WebUserAuthenticatedInfo) => {
        this.formSignIn.StoreWebUserAuthenticatedInfo(response);
      },
      error: (response) => {
        switch (response.status) {
          default:
            this.FailedAuthenticationMessage = SYSTEM_MESSAGES["SignIn_0"];
            break;
          case 401:
            this.FailedAuthenticationMessage = SYSTEM_MESSAGES["SignIn_401"];
            break;
        }
      },
      complete: () => {
        console.log("complete");
      }
    })
  }

  GetUserInfo() {
    //let _tokenvalue = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NSIsImVtYWlsIjoiYnJheWFuQG1haWwuY29tIiwibmJmIjoxNzU2MzMxODU5LCJleHAiOjE3NTYzMzU0NTksImlhdCI6MTc1NjMzMTg3MSwiaXNzIjoiQ2hlbHNlYUJvdXRpcXVlIiwiYXVkIjoiYWNjb3VudCJ9.V6HnPPE2gsVb3g1_HRKjV6brODEOG3xBGQj6XihhXsU";
    this.formSignIn.GetUserInfo().subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
}
