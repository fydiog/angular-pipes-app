import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUppercase:boolean = false;
  heroes:Heroes[] = [
    {
    name: 'Superman',
    flies: true,
    color: Color.blue
    },
    {
    name: 'Batman',
    flies: false,
    color: Color.black
    },
    {
    name: 'Robin',
    flies: false,
    color: Color.red
    },
    {
    name: 'Daredevil',
    flies: false,
    color: Color.green
    },
    
  ]

  toggleCaps(){
    this.isUppercase = !this.isUppercase
  }

  

}
