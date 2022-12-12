import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //Creer un objet pour recevoir et envoyer un message(data):

//BehaviorSubject requiert une valeur initiale
// et stocke la valeur actuelle
// et l'émet aux nouveaux abonnés.
//Dans BehaviorSubject nous pouvons donner une valeur initiale.
// Créons un nouveau BehaviorSubject en lui fournissant une valeur
// initiale ou valeur de départ. 
//Le BehaviorSubject stocke la valeur initiale.
  private shareData: BehaviorSubject<number>
  = new BehaviorSubject<number>
      (0);

      //Share data
      public shareData$ = this.shareData.asObservable();

       constructor() { }

       //Envoie de data
        sendData(value:number){
        console.log("===========> in messgeService: " + value);
        this.shareData.next(value);
        }
}
