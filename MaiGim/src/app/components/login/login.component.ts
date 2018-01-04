import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';


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
  constructor(public a: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  onKeyUsername(event: KeyboardEvent) {
    this.usesrname = (<HTMLInputElement>event.target).value;
    this.nome = (<HTMLInputElement>event.target).value;
  }
  onKeyPassword(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  loginadmin() {
     this.a.login(this.usesrname, this.password);
  }
  logout() {
    this.a.logout();
  }

}
