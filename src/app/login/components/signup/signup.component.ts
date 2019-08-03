import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'app/login/services/user.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public hide = true;
  public year = new Date().getFullYear();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  signUp(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the signup form
    // Calls service to login user to the api rest
    this.loginService.signUp(username, password).then(() => {
      this._snackBar.open('El usuario se creo correctamente', '👏', {
        verticalPosition: 'top',
        duration: 5000
      })
    })
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

}
