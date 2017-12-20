import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-scheda',
  templateUrl: './show-scheda.component.html',
  styleUrls: ['./show-scheda.component.css']
})
export class ShowSchedaComponent implements OnInit {

  nickname: string;

  constructor(private route: ActivatedRoute) {
    this.nickname = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
