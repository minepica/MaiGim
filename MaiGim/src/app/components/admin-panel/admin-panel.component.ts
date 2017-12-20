import { Component, OnInit } from '@angular/core';
import { LoadFirebaseService } from '../../services/load-firebase.service';
import { Observable } from 'rxjs/Observable';
import { Utente } from './class/utente';
import { UploadServiceService } from './admin-service/upload-service.service';


import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [
    LoadFirebaseService,
    UploadServiceService
  ]
})
export class AdminPanelComponent implements OnInit {

  items: Observable<any[]>;
  utente: Utente[];

  constructor(public lFs: LoadFirebaseService, public uPs: UploadServiceService, public snackBar: MatSnackBar) {
    this.items = lFs.loadFromFireBase('/utenti');
    this.items.subscribe(item => {
      this.utente = item;
    });
   }

  deleteUser(nickname: string) {
    this.uPs.removeFileData('/utenti/' + nickname);

    this.openSnackBar('Utente eliminato con successo');
  }


  ngOnInit() {

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }

}
