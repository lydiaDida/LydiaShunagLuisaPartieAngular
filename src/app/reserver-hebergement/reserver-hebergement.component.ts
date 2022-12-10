import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../services/locataire.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reserver-hebergement',
  templateUrl: './reserver-hebergement.component.html',
  styleUrls: ['./reserver-hebergement.component.css']
})
export class ReserverHebergementComponent implements OnInit {

   email: string = 'alain@gmail.com';

  hebergement_id: number = 4;

  constructor(private service: LocataireService) {

  }
  message: any;

  ngOnInit(): void {
    // this.createReservation();
  }

  public createReservation(reservation: Reservation) {
    reservation.hebergementId = this.hebergement_id;
    console.log(reservation);

    this.service.createReservation(reservation).subscribe(data => { this.message = true }, error => console.log(error));
  }

}