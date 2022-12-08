import { Component, OnInit } from '@angular/core';
import { Adresse } from '../adresse';
import { Proprietaire } from '../proprietaire';
import { ProprietaireService } from '../proprietaire.service';

@Component({
  selector: 'app-inscreption-prop',
  templateUrl: './inscreption-prop.component.html',
  styleUrls: ['./inscreption-prop.component.css']
})
export class InscreptionPropComponent implements OnInit {

  constructor(private service:ProprietaireService) { }

  ngOnInit(): void {
    this.onCreate
  }
  message:any;
  dataForm:any;


  public onCreate(proprietaire : Proprietaire){

  this.service.inscrireProprietaire(proprietaire).subscribe(data=> {this.message=true}, error => console.log(error));
    
  
  }

  
}

