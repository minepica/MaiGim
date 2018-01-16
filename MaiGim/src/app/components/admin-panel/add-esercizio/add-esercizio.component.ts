import { Component, OnInit } from '@angular/core';
import { CATEGORIE } from '../class/categorie';
import { UploadServiceService } from '../admin-service/upload-service.service';
import { Esercizio } from '../class/esercizio';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-esercizio',
  templateUrl: './add-esercizio.component.html',
  styleUrls: ['./add-esercizio.component.css'],
  providers: [UploadServiceService]
})
export class AddEsercizioComponent implements OnInit {

  categorie = CATEGORIE;
  esercizio: Esercizio;
  selected: string;

  nome: string;



  constructor(private us: UploadServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onKeyNome(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value.charAt(0) !== ' ') {
      this.nome = (<HTMLInputElement>event.target).value;
    }
  }

  validation() {
    if (this.nome && this.selected) {
      return true;
    } else {
      return false;
    }
  }

  tasto() {
    this.esercizio = new Esercizio();
    this.esercizio.nome = this.nome;
    this.esercizio.categoria = this.selected;

    this.us.saveFileData(this.esercizio, 'esercizi/' + this.esercizio.categoria, this.esercizio.nome);

    this.openSnackBar('Esercizio Aggiunto!');

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }

}
