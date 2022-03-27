import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [
  ]
})
export class UncommonComponent  {

  //i18nSelect
  name: string = 'Fernando'
  gender:string= 'masculine'

  welcomeMap = {
    'masculine': 'boy',
    'femenine': 'girl'
  }

   //i18nPlural
   clients:string[]=['Maria', 'Pedro', 'Manuel', 'Samuel', 'Laura'];


   clientsMap = {
     '=0':'There are no clients waiting',
     '=1':'There is a client waiting',
     'other':'There is # clients waiting',
   }

   changeGender(){
    this.name === 'Fernando' ? this.name='Maria' : this.name='Fernando'
     this.gender === 'masculine' ? this.gender='femenine' : this.gender='masculine'
   }
   deleteClients(){
      this.clients.pop()
   }

   //Key value pipe

   person = {
     name: 'Fernando',
     edad: 35,
     address: 'Ottawa, CANADA'
   }

   //json pipe

   heroes = [
     {name: 'Superman', flies:true},
     {name: 'Robin', flies:false},
     {name: 'Aquaman', flies:false},
    ]

    //async

    observable = interval(1000)

    promiseVal = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('Data resolved from promise')
      }, 1500)
    })

}
