import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion-admin',
  templateUrl: './connexion-admin.component.html',
  styleUrls: ['./connexion-admin.component.css']
})
export class ConnexionAdminComponent implements OnInit {

  constructor(private authentificationservice: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  onConnexion(dataForm:any)
  {
    this.authentificationservice.connexionAdmin(dataForm.email, dataForm.pwd)
    if(this.authentificationservice.isAuthentificated)
    {
      this.router.navigateByUrl('/espaceAdmin')
    }
  }

}
