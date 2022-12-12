import { Component, OnInit } from '@angular/core';
import { HebergementService } from '../services/hebergement.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heberpements-locataire',
  templateUrl: './heberpements-locataire.component.html',
  styleUrls: ['./heberpements-locataire.component.css']
})
export class HeberpementsLocataireComponent implements OnInit {
  public hebergements:any;
    constructor( private service: HebergementService,private messageService: MessageService) { 
        
    }
  
    ngOnInit(): void {
      this.getHebergement();
    }
  
    private getHebergement()
    {
      this.service.getHebergements().subscribe(data=>this.hebergements = data)
    }
      // recuperer id de l'hebergement  et l'envoyer dans message service
      getHebergementId(id:number){
        console.log("==========> send hebergement id " + id);
        // send id to message service
        this.messageService.sendData(id);
        }
        }
  
  