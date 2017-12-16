import { Component, OnInit } from '@angular/core';
import { LoadFirebaseService } from '../../services/load-firebase.service';
import { Observable } from 'rxjs/Observable';
import { Utente } from './class/utente';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [LoadFirebaseService]
})
export class AdminPanelComponent implements OnInit {

  items: Observable<any[]>;
  utente: Utente[];

  constructor(public lFs: LoadFirebaseService) {
    this.items = lFs.loadFromFireBase('/utenti');
    this.items.subscribe(item => {
      console.log(item[0]);
      this.utente = item;
      console.log(this.utente.length);

    });
   }

  ngOnInit() {

  }

}
