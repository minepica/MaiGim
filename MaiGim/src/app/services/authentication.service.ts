import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) { }

        public stato = this.auth.authState;

    login(user: string, password: string ) {
      firebase.auth().signInWithEmailAndPassword(user, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
      this.stato = this.auth.authState;

      firebase.auth().onAuthStateChanged(function( user ) {
        if (user) {
          alert(user.displayName);
        }else {
          alert('mammt');
         }
      });


    }

    showEmail() {
      const usercur = firebase.auth().currentUser;
      alert(usercur.email);
    }

    logout() {
      this.auth.auth.signOut();
      this.stato = this.auth.authState;
    }




}
