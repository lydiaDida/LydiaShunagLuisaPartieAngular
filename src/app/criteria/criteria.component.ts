import { Component, OnInit } from '@angular/core';
import { TypeDeHebergementServiceService } from '../services/type-de-hebergement-service.service';
import { SecteurDeHebergementServiceService } from '../services/secteur-de-hebergement-service.service';
import { HebergementService } from '../services/hebergement.service';
import { TypeDeHebergement } from '../models/type-de-hebergement';
import { SecteurDeHebergment } from '../models/secteur-de-hebergment';
import { HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Inject, LOCALE_ID } from '@angular/core';
import { Hebergement } from '../models/hebergement';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  constructor(private typeService: TypeDeHebergementServiceService, 
              private secteurSevice: SecteurDeHebergementServiceService,
              private messageService: MessageService,
              private hebergementService: HebergementService,
              @Inject(LOCALE_ID) private locale:string) { }
  
  typeDeHebergement: TypeDeHebergement[] = [];
  secteurDeHebergement: SecteurDeHebergment[] =[];
  
  prixMin: number = 0;
  prixMax: number = 0;
  type:TypeDeHebergement = {'id':0, 'typeDeHebergement':''};
  typeId:string = '0';
  secteur:SecteurDeHebergment = {'id':0, 'secteurDeHebergement':''};
  secteurId:string = '0';
  // default 
  dateDeArrive:Date = new Date();
  dateDeDepart:Date = new Date();
  // return value
  hebergements:any;


  ngOnInit(): void {
    this.getAllSecteur();
    this.getAllType();
  }

  private getAllType(){
    this.typeService.getAllTypeDeHebergement().subscribe(data=>this.typeDeHebergement = data);
  }

  private getAllSecteur(){
    this.secteurSevice.getAllSecteurDeHebergement().subscribe(data=>this.secteurDeHebergement = data);
  }

  getType(e:Event){
    console.log((<HTMLSelectElement>e.target).value);
    this.typeId = (<HTMLSelectElement>e.target).value;
  }
  getSecteur(e:Event){
    console.log((<HTMLSelectElement>e.target).value);
    this.secteurId= (<HTMLSelectElement>e.target).value;
  }


  chercherParCritere(){
    // console.log(formatDate(this.dateDeArrive, 'yyyy-MM-dd',this.locale));
    // construire critere 
    const critere = new HttpParams()
                    .set('prixMin', this.prixMin)
                    .set('prixMax', this.prixMax)
                    .set('typeDeHebergementId', this.typeId)
                    .set('secteurDeHebergementId', this.secteurId)
                    .set('dateDeArrive', formatDate(this.dateDeArrive, 'yyyy-MM-dd', this.locale))
                    .set('dateDeDepart', formatDate(this.dateDeDepart, 'yyyy-MM-dd', this.locale))
    console.log("in composant ====>" + critere.toString());
    this.hebergementService.getHebergementParCritere(critere).subscribe(data=>this.hebergements = data);

  }
  getHebergementId(id:number){
    console.log("==========> send hebergement id " + id);
    // send id to message service
    this.messageService.sendData(id);
    }
}

