import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ValidateWebUserMatch: ValidatorFn = (
    (control: AbstractControl): ValidationErrors | null => {

        let _password = control.get('WebUserPassword')?.value;
        let _password2 = control.get('ConfirmWebUserPassword')?.value;

        if (_password === _password2)
            return null;

        return { passwordmismatch: true };
    }
)