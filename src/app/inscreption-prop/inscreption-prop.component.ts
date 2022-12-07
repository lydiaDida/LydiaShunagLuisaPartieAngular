import { Component, OnInit } from '@angular/core';
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
  }
  message: any = false;
  onCreate(proprietaire:Proprietaire){
    this.service.inscrireProprietaire(proprietaire).subscribe(data=> {this.message=true;
      
    })

  }

}
