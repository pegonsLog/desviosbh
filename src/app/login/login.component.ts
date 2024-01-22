import { Component } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public form: FormGroup;
  userAuth: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      user: ['564'],
      password: ['123456'],
    });
  }

  public onSubmit() {
    this.userAuth = this.loginService.userAuth(this.form.value);
    if (this.userAuth === 'user') {
      this.router.navigate(['desvios-list']);
    }
    if (this.userAuth === 'adm') {
      this.router.navigate(['desvios-list']);
    }
    if (this.userAuth === '') {
      this.onError();
    }
  }
  public onClear() {
    this.form.setValue({ user: '', password: '' });
  }

  onError() {
    this.snackBar.open('Usuário ou senha inválidos!', 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
