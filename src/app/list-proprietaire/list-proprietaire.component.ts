import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../models/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.css']
})
export class ListProprietaireComponent implements OnInit {
  constructor(private service: ProprietaireService) { }
  proprietaires: any;
  deleteMessage=false;
  ngOnInit(): void {
    this.getProprietaire;
    this.deleteProprietaire;
  }

  public getProprietaire()
  {
    this.service.getListProprietaire().subscribe(data=>this.proprietaires = data)

  }
  public deleteProprietaire(email:string) {
    this.service.deleteProprietaire(email)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.service.getListProprietaire().subscribe(data =>{
            this.proprietaires =data
            })
        },
        error => console.log(error));
  }

}
