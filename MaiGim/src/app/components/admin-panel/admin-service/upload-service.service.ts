import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploadServiceService {

  constructor() { }

  saveFileData(obj: object, path: string, name: string) {
    firebase.database().ref('/' + path + '/' + name).set(obj);
  }

  removeFileData(path: string) {
    firebase.database().ref(path).remove();
  }
}
