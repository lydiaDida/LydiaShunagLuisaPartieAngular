import { Component, OnInit } from '@angular/core';
import { Locataire } from '../locataire';
import { LocataireService } from '../locataire.service';
import { Proprietaire } from '../proprietaire';

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


  public onCreate(locataire : Locataire){

  this.service.createLocataire(locataire).subscribe(data=> {this.message=true}, error => console.log(error));
    
  
  }


}
