import { AbstractControl, FormGroup } from '@angular/forms';

export interface IError {
    controlName: string;
    error: string;
    group: AbstractControl;
    form: FormGroup;
    submitted: boolean;
}
