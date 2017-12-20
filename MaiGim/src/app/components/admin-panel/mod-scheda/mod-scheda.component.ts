import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadFirebaseService } from '../../../services/load-firebase.service';
import { Observable } from 'rxjs/Observable';
import { UploadServiceService } from '../admin-service/upload-service.service';
import { Esercizio } from '../class/esercizio';

@Component({
  selector: 'app-mod-scheda',
  templateUrl: './mod-scheda.component.html',
  styleUrls: ['./mod-scheda.component.css'],
  providers: [LoadFirebaseService, UploadServiceService]
})
export class ModSchedaComponent implements OnInit {

  scheda: Observable<any[]>;

  sezioneA: Observable<any[]>;
  sezioneB: Observable<any[]>;
  sezioneC: Observable<any[]>;

  bicipiti: Observable<any[]>;
  gambe: Observable<any[]>;
  petto: Observable<any[]>;
  spalle: Observable<any[]>;
  tricipiti: Observable<any[]>;

  nickname: string;

  showing = false;
  selectedSchede: string;


  constructor(private route: ActivatedRoute, private lfs: LoadFirebaseService, private uss: UploadServiceService) {
    this.nickname = this.route.snapshot.paramMap.get('id');
    this.scheda = lfs.loadFromFireBase('/schede/' + this.nickname);

    this.sezioneA = lfs.loadFromFireBase('/schede/' + this.nickname + '/sezioneA');
    this.sezioneB = lfs.loadFromFireBase('/schede/' + this.nickname + '/sezioneB');
    this.sezioneC = lfs.loadFromFireBase('/schede/' + this.nickname + '/sezioneC');


    this.bicipiti = lfs.loadFromFireBase('/esercizi/Bicipiti');
    this.gambe = lfs.loadFromFireBase('/esercizi/Gambe');
    this.petto = lfs.loadFromFireBase('/esercizi/Petto');
    this.spalle = lfs.loadFromFireBase('/esercizi/Spalle');
    this.tricipiti = lfs.loadFromFireBase('/esercizi/Tricipiti');

  }

  ngOnInit() {
  }

  showAdd(sezione: string) {
    this.selectedSchede = sezione;
    this.showing = true;
  }

  hideAdd() {
    this.showing = false;
  }

  addEx(esercizio: string) {
    const es = new Esercizio();
    es.nome = esercizio;
    es.categoria = 'cat';

    const prova = 'schede/' + this.nickname + '/sezione' + this.selectedSchede;
    this.uss.saveFileData(es, ('schede/' + this.nickname + '/sezione' + this.selectedSchede) , esercizio);
    console.log(prova);
    console.log(esercizio);
    console.log(es);
  }

  delEx(esercizio: string, sezione: string) {
    this.uss.removeFileData('schede/' + this.nickname + '/sezione' + sezione + '/' + esercizio);
    console.log('fatto');
  }

}
