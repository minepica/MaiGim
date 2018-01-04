import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {

  constructor(auth: AngularFireAuth) {}

   get authenticated(): boolean {
     const user = firebase.auth().currentUser;
     if (user) {
      return true;
     }else {
      return false;
     }
   }

   get isAdmin(){
     return firebase.auth().currentUser.email;
   }
}
