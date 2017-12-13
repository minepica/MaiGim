import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public a: AuthenticationService ) { }

  ngOnInit() {
  }

  login() {
    this.a.login_anonimo();
  }

  logout() {
    this.a.logout();
  }
}
