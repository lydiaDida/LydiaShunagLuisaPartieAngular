import { Component, OnInit } from '@angular/core';
import { HebergementService } from '../services/hebergement.service';
import { Observable,Subject } from "rxjs";
import { Hebergement } from '../hebergement';


@Component({
  selector: 'app-espace-proprietaire',
  templateUrl: './espace-proprietaire.component.html',
  styleUrls: ['./espace-proprietaire.component.css']
})
export class EspaceProprietaireComponent implements OnInit {

  constructor(private hebergementService: HebergementService) { }
  hebergements: any;
  deleteMessage=false;
  ngOnInit(): void {
    this.getHebergement();
    this.deleteHebergement;
  }

  private getHebergement()
  {
    this.hebergementService.getHebergements().subscribe(data=>this.hebergements = data)
  }
  public deleteHebergement(id: number) {
    this.hebergementService.deleteHebergements(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.hebergementService.getHebergements().subscribe(data =>{
            this.hebergements =data
            })
        },
        error => console.log(error));
  }

}
