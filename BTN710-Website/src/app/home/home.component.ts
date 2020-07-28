import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pass: String;
  enteredPassword: String;
  invalidPassword = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    if (this.enteredPassword != null) {
      if (bcrypt.compareSync(this.enteredPassword, this.auth.password)) {
        this.auth.loggedIn = true;
      }
      this.invalidPassword = true;
      this.enteredPassword = '';
    }
  }
}
