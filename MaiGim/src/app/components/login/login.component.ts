import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usesrname: string;
  password: string;
  nome: string;
  constructor(public a: AuthenticationService ) { }

  ngOnInit() {
  }

  onKeyUsername(event: KeyboardEvent) {
    this.usesrname = (<HTMLInputElement>event.target).value;
    this.nome = (<HTMLInputElement>event.target).value;
  }
  onKeyPassword(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;

  }
  login() {
     this.a.login_anonimo(this.usesrname, this.password);

  }

  logout() {
    this.a.logout();
  }
}
