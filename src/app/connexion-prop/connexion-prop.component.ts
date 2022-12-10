import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion-prop',
  templateUrl: './connexion-prop.component.html',
  styleUrls: ['./connexion-prop.component.css']
})
export class ConnexionPropComponent implements OnInit {

  constructor(private authentificationservice: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  onConnexion(dataForm:any)
  {
    this.authentificationservice.connexionProprietaire(dataForm.email, dataForm.pwd)
    if(this.authentificationservice.isAuthentificated)
    {
      this.router.navigateByUrl('/espaceProprietaire')
    }
  }
  

}
