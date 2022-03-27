import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  nameUpper:string= 'FIDEL';
  nameLower:string= 'fidel';
  nameRandom:string= 'fIdEl';
  date:Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
