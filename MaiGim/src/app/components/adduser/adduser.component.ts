import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Utente } from '../../classi/utente';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  providers: [UploadService],
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private up: UploadService) { }
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

  upload(path: string) {
    console.log('sono nel upload');
    this.currentupload = new Utente(this.nome, this.cognome, this.email, this.nickname);
    console.log(this.currentupload);
    this.up.saveFileData(this.currentupload, path);
  }



  ngOnInit() {
  }

}
