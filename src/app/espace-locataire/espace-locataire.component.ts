import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../services/locataire.service';


@Component({
  selector: 'app-espace-locataire',
  templateUrl: './espace-locataire.component.html',
  styleUrls: ['./espace-locataire.component.css']
})
export class EspaceLocataireComponent implements OnInit {

  constructor( private reservationService: LocataireService, ) { }
  reservations: any;
  reser: any;
  deleteMessage=false;

 ngOnInit(): void {
    this.getReservations();
    this.deleteReservation;
  }

  public getReservations()
  {
    this.reservationService.getReservations().subscribe(data=>this.reser = data)
  }
  //getReservation d'un locataire


  public getReservationsLocataire(email:string, dataForm:any)
  {
    this.reservationService.getReservationsLocataire(dataForm.email).subscribe(data=>this.reservations = data)
  }
  //Supprimer une reservation
  public deleteReservation (id: number) {
      this.reservationService.deleteReservations(id)
        .subscribe(
          data => {
            console.log(data);
            this.deleteMessage=true;
            this.reservationService.getReservations().subscribe(data =>{
              this.reservations =data
              })
          },
          error => console.log(error));
    }
  
  }




