import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SnackBarService} from "../../shared/snack-bar/snack-bar.service";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form">
      <div class="flex items-center justify-center h-screen">
        <mat-card style="width: 20%">
          <mat-card-header>
            <mat-card-title>Fleet Managment</mat-card-title>
            <mat-card-subtitle>Gestisci i tuoi mezzi</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="grid">
              <mat-form-field class="example-full-width">
                <mat-label>Username</mat-label>
                <input matInput formControlName="username">
              </mat-form-field>

              <mat-form-field class="example-full-width">
                <mat-label>Password</mat-label>
                <input type="password" matInput formControlName="password">
              </mat-form-field>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" (click)="login()">ACCEDI</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </form>
  `,
  styles: []
})
export class LoginComponent {
  form = this.fb.group({
    username: ['user', [Validators.required]],
    password: ['password',
      [
        Validators.required,
        // Validators.pattern(/[a-zA-Z0-9]{8}/g)
      ]
    ],
  })

  constructor(private fb: FormBuilder,
              private snackBarService: SnackBarService,
              private loginService: LoginService,
              private router:Router
  ) {
  }

  login() {
    if (this.form.invalid) {
      const msg = "Inserire username e password";
      this.snackBarService.openSnack({message: msg, type: 'danger', duration: 4000, icon: 'dangerous'});
    } else {
      //Riprendo i valori per effettuare il login

      this.loginService.login()
        .subscribe(res => {
            this.router.navigateByUrl('home');
          }
        );
    }
  }
}
