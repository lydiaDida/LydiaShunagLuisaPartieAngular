import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { HebergementService } from '../services/hebergement.service';
import { LocataireService } from '../services/locataire.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-espace-locataire',
  templateUrl: './espace-locataire.component.html',
  styleUrls: ['./espace-locataire.component.css']
})
export class EspaceLocataireComponent implements OnInit {

  constructor( private messageService:MessageService ,private reservationService: LocataireService,private service: HebergementService, public authService:AuthentificationService ) { }
  reservations: any;
  reser: any;
  deleteMessage=false;
  public hebergements:any;

 ngOnInit(): void {
  
    this.getHebergement();
  }

  private getHebergement()
  {
    this.service.getHebergements().subscribe(data=>this.hebergements = data)
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
  // recuperer id de l'hebergement  et l'envoyer dans message service
  getHebergementId(id:number){
    console.log("==========> send hebergement id " + id);
    // send id to message service
    this.messageService.sendData(id);
    }
  }




