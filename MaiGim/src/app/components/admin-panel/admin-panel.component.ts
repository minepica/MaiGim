import { Component, OnInit } from '@angular/core';
import { LoadFirebaseService } from '../../services/load-firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [LoadFirebaseService]
})
export class AdminPanelComponent implements OnInit {

  items: Observable<any[]>;

  constructor(public lFs: LoadFirebaseService) {
    this.items = lFs.loadFromFireBase('utenti');
    console.log(this.items);
   }

  ngOnInit() {
  }

}
