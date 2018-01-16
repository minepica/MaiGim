import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs/Observable';
import { LoadFirebaseService } from '../../services/load-firebase.service';
import { Utente } from '../admin-panel/class/utente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService, AuthService, LoadFirebaseService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items: Observable<any[]>;
  usesrname: string;
  password: string;
  nome: string;
  i: number;

  utente: Utente[];
  constructor(public a: AuthenticationService, private router: Router, public auth: AuthService, public lfs: LoadFirebaseService ) { }

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

  recupero() {
    this.a.resetPassword(this.usesrname);
  }

  redirect() {
    if (this.auth.isAdmin === 'luca@luca.it') {
      this.router.navigate(['/adminpanel']);
    }else {
      this.items = this.lfs.loadFromFireBase('/utenti');
      this.items.subscribe(item => {
        this.utente = item;
        for ( this.i = 0; this.i < this.utente.length; this.i ++) {
          if (this.utente[this.i].email === this.auth.isAdmin) {
            console.log(this.utente[this.i].nickname);
            this.router.navigate(['/showScheda/' + this.utente[this.i].nickname]);
          }
        }
      });
    }
  }

}
