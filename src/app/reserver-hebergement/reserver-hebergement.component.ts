import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../locataire.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reserver-hebergement',
  templateUrl: './reserver-hebergement.component.html',
  styleUrls: ['./reserver-hebergement.component.css']
})
export class ReserverHebergementComponent implements OnInit {

 
    constructor( private service: LocataireService) { 
        
    }
    message : any;
  
    ngOnInit(): void {
     // this.createReservation();
    }
  
    public createReservation(reservation: Reservation)
    {
      this.service.createReservation(reservation).subscribe(data=> {this.message=true}, error => console.log(error));
    }
    
  }