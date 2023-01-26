import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public form1 = {
    email: null,
    password: null,
  }
  public form2 = {
    name: null,
    password_confirmation: null,
    role: null
  }
  constructor() { }

  ngOnInit(): void {

  }
  submitLogin(loginForm: NgForm) {
    console.log(this.form1);

    loginForm.reset()

  }
  submitSignup(signupForm: NgForm) {
    console.log(this.form2);

    signupForm.reset()
  }

}
