import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Utente } from '../classi/utente';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }



  saveFileDataSteve(obj: object, path: string) {
    firebase.database().ref('/' + path ).set(obj);
  }
}
