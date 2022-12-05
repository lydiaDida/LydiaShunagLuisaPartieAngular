import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../locataire.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reserver-hebergement',
  templateUrl: './reserver-hebergement.component.html',
  styleUrls: ['./reserver-hebergement.component.css']
})
export class ReserverHebergementComponent implements OnInit {

    reservation: Reservation=new Reservation();
    constructor( private service: LocataireService) { 
        
    }
  
    ngOnInit(): void {
      this.createReservation();
    }
  
    public createReservation()
    {

      this.reservation.dateDeArrive =new Date(Date.now()); 
      this.reservation.dateDeDepart = new Date(Date.now());
      this.reservation.nombreAdulte =2;
      this.reservation.nombreEnfant=2;
      this.reservation.nombreBebe=2;
      this.reservation.nombreAnimauxAssistance=2;
      this.reservation.etatReservation= true;
      this.service.createReservation(this.reservation).subscribe(data => console.log(data), error => console.log(error));
      
    }
  
  }