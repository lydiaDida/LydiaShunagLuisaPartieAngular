import { Component, OnInit } from '@angular/core';
import { HebergementService } from '../services/hebergement.service';

@Component({
  selector: 'app-heberpements-locataire',
  templateUrl: './heberpements-locataire.component.html',
  styleUrls: ['./heberpements-locataire.component.css']
})
export class HeberpementsLocataireComponent implements OnInit {
  public hebergements:any;
    constructor( private service: HebergementService) { 
        
    }
  
    ngOnInit(): void {
      this.getHebergement();
    }
  
    private getHebergement()
    {
      this.service.getHebergements().subscribe(data=>this.hebergements = data)
    }
  
  }
  