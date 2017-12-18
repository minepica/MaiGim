import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UploadService } from '../../services/upload.service';
import { Utente } from '../../classi/utente';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { LoadFirebaseService } from '../../services/load-firebase.service';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  providers: [UploadService, LoadFirebaseService],

  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent implements OnInit {
  items: Observable<any[]>;
  utente: Utente[];
  i: number;
  // tslint:disable-next-line:max-line-length
  constructor(public lFs: LoadFirebaseService, private route: ActivatedRoute, db: AngularFireDatabase, private us: UploadService, public snackBar: MatSnackBar) {
    this.nickname = this.route.snapshot.paramMap.get('id');
    this.items = lFs.loadFromFireBase('/utenti');
    this.items.subscribe(item => {
      console.log(item);
      this.utente = item;
      for (this.i = 0; this.i < this.utente.length; this.i++) {
        if (this.utente[this.i].nickname === this.nickname) {
          console.log(this.utente[this.i].nickname);
          this.nome = this.utente[this.i].nome;
          this.email = this.utente[this.i].email;
          this.cognome = this.utente[this.i].cognome;

        }
      }
    });
   }

  cognome: string;
  email: string;
  nickname: string;
  nome: string;
  currentupload: Utente;



  onKeyNome(event: KeyboardEvent) {
    this.nome = (<HTMLInputElement>event.target).value;
  }
  onKeyCognome(event: KeyboardEvent) {
    this.cognome = (<HTMLInputElement>event.target).value;
  }
  onKeyEmail(event: KeyboardEvent) {
    this.email = (<HTMLInputElement>event.target).value;
  }
  /*
  onKeyNickname(event: KeyboardEvent) {
    this.nickname = (<HTMLInputElement>event.target).value;
  }
*/
  validation() {
    if (this.nome && this.cognome && this.email ) {
      return true;
    } else {
      return false;
    }
  }
  tasto() {
    console.log('sono nel upload');

    this.currentupload = new Utente(this.nome, this.cognome, this.email, this.nickname);


    this.us.saveFileDataSteve(this.currentupload, 'utenti/' + this.nickname);

    this.openSnackBar('Utente modificato!');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }

  ngOnInit() {
  }

}
