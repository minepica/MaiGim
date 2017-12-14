import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable()
export class LoadFirebaseService {

  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  loadFromFireBase(path: string) {
    return this.db.list(path).valueChanges();
  }

}
