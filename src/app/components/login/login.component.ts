import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatosLogin } from 'src/app/Models/loginmodel';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private LoginService: LoginService
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    const user = this.form.value.usuario;
    const password = this.form.value.password;
    const data: DatosLogin = {
      usuario: user,
      contrasena: password,
    };
    this.LoginService.iniciodesesion(data)
    .subscribe(ModeleoDeRespuesta  => {
      this.fakeloading();
    }, response => {
      this.error(response.error.Respuesta)
    })
  }
  error(Respuesta: string) {
    this._snackBar.open(Respuesta, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
