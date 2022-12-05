import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { HebergementService } from '../services/hebergement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public hebergements:any;
  constructor( private service: HebergementService, public authService:AuthentificationService) { 
      
  }

  ngOnInit(): void {
    this.getHebergement();
  }

  private getHebergement()
  {
    this.service.getHebergements().subscribe(data=>this.hebergements = data)
  }

}
