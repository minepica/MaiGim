import { Component, OnInit } from '@angular/core';
import { CATEGORIE } from '../class/categorie';

@Component({
  selector: 'app-add-esercizio',
  templateUrl: './add-esercizio.component.html',
  styleUrls: ['./add-esercizio.component.css']
})
export class AddEsercizioComponent implements OnInit {

  categorie = CATEGORIE;
  constructor() { }

  ngOnInit() {
  }

}
