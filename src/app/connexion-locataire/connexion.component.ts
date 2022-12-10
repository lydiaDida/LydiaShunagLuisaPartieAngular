import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private authentificationservice: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  onConnexion(dataForm:any)
  {
    this.authentificationservice.connexionLocataire(dataForm.email, dataForm.pwd)
    if(this.authentificationservice.isAuthentificated)
    {
      this.router.navigateByUrl('/espaceLocataire')
    }
  }

}
