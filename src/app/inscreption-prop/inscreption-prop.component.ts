import { Component, OnInit } from '@angular/core';
import { Adresse } from '../models/adresse';
import { Proprietaire } from '../models/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';

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
  proprietaire:any

  public onCreate(proprietaire : Proprietaire){

  this.service.inscrireProprietaire(proprietaire).subscribe(data=> {this.message=true}, error => console.log(error));
  
}
public onSubmit(dataForm:any)
{
 this.dataForm.reset;
}
 
  }

  


