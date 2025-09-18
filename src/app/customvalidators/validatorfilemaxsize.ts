import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function ValidateFileSize(maxSize: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const file = control.value as File;
        if (!file)
            return null;

        if (file.size > maxSize)
            return { maxFileSizeAllow: true, maxKbSizeAllowed: Math.ceil(maxSize / 1024) }

        return null;
    }
}