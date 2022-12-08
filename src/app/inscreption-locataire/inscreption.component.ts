import { Component, OnInit } from '@angular/core';
import { Locataire } from '../locataire';
import { LocataireService } from '../locataire.service';

@Component({
  selector: 'app-inscreption',
  templateUrl: './inscreption.component.html',
  styleUrls: ['./inscreption.component.css']
})
export class InscreptionComponent implements OnInit {

  constructor(private service:LocataireService) { }

  ngOnInit(): void {
  }
  message:any;

 // locataire: lo = new this.locataire;
  //adresse: Adresse = new Adresse;
 /* onCreate(dataForm:any,dataForm1:any){
    this.proprietaire.motDePasse = dataForm.motDePasse;
    this.proprietaire.nom = dataForm.nom;
    this.proprietaire.prenom = dataForm.prenom;
    this.proprietaire.telephone = dataForm.telephone;
    this.proprietaire.etatDeProprietaire = dataForm.etatDeProprietaire;
   ///this.proprietaire.Adresse.id = dataForm1.id;
    this.proprietaire.Adresse.numeroDeRue =0;
    this.proprietaire.Adresse.numeroDeRue = dataForm1.numRue;
    this.proprietaire.Adresse.rue = dataForm1.rue;
    this.proprietaire.Adresse.codePostale = dataForm1.codePostale;
    this.proprietaire.Adresse.pays = dataForm1.pays;
    this.proprietaire.Adresse.ville = dataForm1.ville;
    this.proprietaire.Adresse.province = dataForm1.province;
    this.service.inscrireProprietaire(this.proprietaire).subscribe(data=> {this.message=true;
      
    })
*/

 public onCreate(locataire: Locataire){

  this.service.createLocataire(locataire).subscribe(data=> {this.message=true;
    
  })
  }

}
