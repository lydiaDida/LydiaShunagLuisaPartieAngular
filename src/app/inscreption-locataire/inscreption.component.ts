import { Component, OnInit } from '@angular/core';
import { Locataire } from '../models/locataire';
import { LocataireService } from '../services/locataire.service';
import { Proprietaire } from '../models/proprietaire';

@Component({
  selector: 'app-inscreption',
  templateUrl: './inscreption.component.html',
  styleUrls: ['./inscreption.component.css']
})
export class InscreptionComponent implements OnInit {

  constructor(private service:LocataireService) { }

  ngOnInit(): void {
    this.onCreate
  }
  message:any;
  dataForm:any;
  proprietaire:any

  public onCreate(locataire : Locataire){

  this.service.inscrireLocataire(locataire).subscribe(data=> {this.message=true}, error => console.log(error));
  
  console.log(locataire);
  
  }


}
