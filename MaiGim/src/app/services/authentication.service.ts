import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';

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
    }

    logout() {
      this.auth.auth.signOut();
      this.stato = this.auth.authState;
    }

    signUp(email: string, password: string) {
      console.log('A sor e mimm');
      firebase.auth().createUserWithEmailAndPassword(email, email).catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }

    resetPassword(email: string) {
      firebase.auth().sendPasswordResetEmail(email).then(function(){
        alert('Email Inviata');
      }).catch(function(error){
        alert('Email non valida');
      });
    }






}
