import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, this.formatoEmail()]],
      senha: ['', [Validators.required, this.letramauiscula()]]
    });
  }

  login() {
    console.log('Login realizado com sucesso', this.loginForm.value);
    this.router.navigate(['/inicial']);
  }

  letramauiscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasUppercase = /[A-Z]/.test(control.value);
      return hasUppercase ? null : { letramauiscula: true };
    };
  }

  formatoEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value);
            return emailValid ? null : { formatoEmail: true };
    };
  }
}
