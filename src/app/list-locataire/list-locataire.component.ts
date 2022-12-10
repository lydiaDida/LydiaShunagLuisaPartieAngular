import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../services/locataire.service';

@Component({
  selector: 'app-list-locataire',
  templateUrl: './list-locataire.component.html',
  styleUrls: ['./list-locataire.component.css']
})
export class ListLocataireComponent implements OnInit {
  constructor(private service: LocataireService) { }
  locataires: any;
  deleteMessage=false;
  ngOnInit(): void {
    this.getLocataire();
    this.deleteLocataire;
  }

  public getLocataire()
  {
    this.service.getLocataireList().subscribe(data =>{
      this.locataires =data
      })
  }
  public deleteLocataire(email:string) {
    this.service.deleteLocataire(email)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.service.getLocataireList().subscribe(data =>{
            this.locataires =data
            })
        },
        error => console.log(error));
  }


}
