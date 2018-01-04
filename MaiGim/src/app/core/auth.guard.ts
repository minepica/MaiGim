import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { LoadFirebaseService } from '../services/load-firebase.service';
import { Utente } from '../components/admin-panel/class/utente';


@Injectable()
export class AuthGuard implements CanActivate {
  items: Observable<any[]>;
  utente: Utente[];
  i: number;

  nickname: string;

  constructor(private auth: AuthService, private router: Router, private lfs: LoadFirebaseService) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      setTimeout(() => {
          if (!this.auth.authenticated) {
            this.router.navigate(['/']);
          }
          if (this.auth.isAdmin === 'luca@luca.it') {
            this.router.navigate(['/adminpanel']);
          }else {
            this.items = this.lfs.loadFromFireBase('/utenti');
    this.items.subscribe(item => {
      this.utente = item;
      for ( this.i = 0; this.i < this.utente.length; this.i ++) {
        if (this.utente[this.i].email === this.auth.isAdmin) {
          console.log(this.utente[this.i].nickname);
          this.router.navigate(['/modScheda/' + this.utente[this.i].nickname]);
        }
      }
    });

           
          }
      },
      2000);

    return true;
  }
}
