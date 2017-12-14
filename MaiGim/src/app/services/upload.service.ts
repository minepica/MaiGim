import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Utente } from '../classi/utente';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }

   saveFileData(user: Utente, path: string) {
    this.db.list(path).set(user.nickname, {user});
  }
}
