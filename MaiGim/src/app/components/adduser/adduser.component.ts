import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Utente } from '../../classi/utente';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  providers: [UploadService],
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private us: UploadService, public snackBar: MatSnackBar) { }
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
  onKeyNickname(event: KeyboardEvent) {
    this.nickname = (<HTMLInputElement>event.target).value;
  }

  validation() {
    if (this.nome && this.cognome && this.email && this.nickname ) {
      return true;
    } else {
      return false;
    }
  }
  tasto() {
    console.log('sono nel upload');
    this.currentupload = new Utente(this.nome, this.cognome, this.email, this.nickname);


    this.us.saveFileDataSteve(this.currentupload, 'utenti/' + this.currentupload.nickname);

    this.openSnackBar('Utente Aggiunto!');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }


  ngOnInit() {
  }

}
