import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IError } from '../models/error.model';
import { IAuth } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public errorMessage: string;

  private submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.maxLength(50)
        ]
      }
      ],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }]
    });

  }

  public showError(controlName: string, error?: string, group?: AbstractControl): boolean {
    const form = this.form;
    const submitted = this.submitted;

    return this.getError({ controlName, error, group, form, submitted });
  }

  public login(): void {
    this.submitted = true;
    const credos: IAuth = JSON.parse(localStorage.getItem('credos'));
    const value: IAuth = this.form.value;

    if (credos.email === value.email && credos.password === value.password) {
      this.authService.updateAuth(true);
    } else {
      this.errorMessage = 'Введены не правельные данные';
    }
  }

  private getError(errors: IError) {
    const control = errors.group ? errors.group.get(errors.controlName) : errors.form.controls[errors.controlName];

    const showCondition = control && control.errors && Object.keys(control.errors).length ?
      control.dirty || control.touched || errors.submitted : false;

    return showCondition && (errors.error ? control.errors[errors.error] : true);
  }

}
