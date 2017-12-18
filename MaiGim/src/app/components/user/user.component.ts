import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadFirebaseService } from '../../services/load-firebase.service';
import { Esercizioluca } from '../../classi/esercizio';
import { UploadService } from '../../services/upload.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [LoadFirebaseService, UploadService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentupload: Esercizioluca;
  peso: number;
  itemsA: Observable<any[]>;
  itemsB: Observable<any[]>;
  itemsC: Observable<any[]>;
  esercizioC: Esercizioluca[];
  esercizioB: Esercizioluca[];
  esercizioA: Esercizioluca[];
  constructor(public lFs: LoadFirebaseService, private us: UploadService, public snackBar: MatSnackBar) { 
    this.itemsA = lFs.loadFromFireBase('/schede/email/sezioneA');
    this.itemsB = lFs.loadFromFireBase('/schede/email/sezioneB');
    this.itemsC = lFs.loadFromFireBase('/schede/email/sezioneC');
   this.itemsC.subscribe(item => {
     this.esercizioC = item;
      });
    this.itemsB.subscribe(item => {
      this.esercizioB = item;
      });
    this.itemsA.subscribe(item => {
      this.esercizioA = item;
      });
  }
  onKeyPeso(event: KeyboardEvent) {
    this.peso = Number.parseInt((<HTMLInputElement>event.target).value);
  }
  modC(i: number) {
    console.log('sono nel upload');
    console.log(i);
    this.esercizioC[i].peso = this.peso;
    this.us.saveFileDataSteve(this.esercizioC, '/schede/email/sezioneC');
    this.openSnackBar('Peso modificato!');
  }
  modB(i: number) {
    console.log('sono nel upload');
    console.log(i);
    this.esercizioB[i].peso = this.peso;
    this.us.saveFileDataSteve(this.esercizioB, '/schede/email/sezioneB');
    this.openSnackBar('Peso modificato!');
  }
  modA(i: number) {
    console.log('sono nel upload');
    console.log(i);
    this.esercizioA[i].peso = this.peso;
    this.us.saveFileDataSteve(this.esercizioA, '/schede/email/sezioneA');
    this.openSnackBar('Peso modificato!');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }
  ngOnInit() {
  }

}
