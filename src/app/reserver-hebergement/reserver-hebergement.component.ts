import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../services/locataire.service';
import { Reservation } from '../models/reservation';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reserver-hebergement',
  templateUrl: './reserver-hebergement.component.html',
  styleUrls: ['./reserver-hebergement.component.css']
})
export class ReserverHebergementComponent implements OnInit {

  hebergement_id: number = 0;

  subscription: Subscription = new Subscription();

  constructor(private service: LocataireService,
              private messageService: MessageService) {
    // recuperer hebergement id pour le passer 
       this.subscription = this.messageService.shareData$.subscribe((data: number) => {
       console.log("recieve hebergement id ========> " + data);
       this.hebergement_id = data;
    });
  }


  message: any;

  ngOnInit(): void {    
  }

  public createReservation(reservation: Reservation) {
    reservation.hebergementId = this.hebergement_id;
    console.log(reservation);
    this.service.createReservation(reservation).subscribe(data => { this.message = true }, error => console.log(error));
  }

}