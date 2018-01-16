import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Utente } from '../../classi/utente';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  providers: [UploadService, AuthenticationService],
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private us: UploadService, public snackBar: MatSnackBar, public a: AuthenticationService) { }
  cognome: string;
  email: string;
  nickname: string;
  nome: string;
  currentupload: Utente;

  onKeyNome(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value.charAt(0) !== ' ') {
      this.nome = (<HTMLInputElement>event.target).value;
    }
  }
  onKeyCognome(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value.charAt(0) !== ' ') {
      this.cognome = (<HTMLInputElement>event.target).value;
    }
  }
  onKeyEmail(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value.charAt(0) !== ' ') {
      this.email = (<HTMLInputElement>event.target).value;
    }
  }
  onKeyNickname(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value.charAt(0) !== ' ') {
      this.nickname = (<HTMLInputElement>event.target).value;
    }
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

    this.a.signUp(this.email, this.nickname);

    setTimeout(() => {
      this.a.resetPassword(this.email);
    },
    3000);


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
