import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  //Pour tester 
  //Apres ces donnees on doit les recuperer de la bd ou on stocke les utilisateurs
  //On a deja codé les service getLocataire, getProprietaire, et getAdmin
  private proprietaires = [
    {
      email:'proprietaire@gmail.com',
      pwd:'1234',
    
    },
    {
      email:'user',
      pwd:'1234',
     
    }
  ]
  private admins = [
    {
      email:'admin@gmail.com',
      pwd:'1234',
    
    },
    {
      email:'ADMIN',
      pwd:'1234',
     
    }
  ]
  private locataires = [
    {
      email:'alain@gmail.com',
      pwd:'1234',
    
    },
    {
      email:'locataire@gmail.com',
      pwd:'1234',
     
    }
  ]
  public isAuthentificated:any;
  public userAuthentificated:any;

  constructor() { }

  //Admin
  public connexionAdmin(email:string, pwd:string)
  {
    let admin;
    this.admins.forEach(a => {
      if(a.email == email && a.pwd == pwd)
      {admin = a}
      
    });
    if(admin)
    {
      this.isAuthentificated = true
      this.userAuthentificated = true
    }
    else
    {
      this.isAuthentificated = false
      this.userAuthentificated = undefined

    }
  }
  //Locataire
  public connexionLocataire(email:string, pwd:string)
  {
    let locataire;
    this.locataires.forEach(l => {
      if(l.email == email && l.pwd == pwd)
      {locataire = l}
      
    });
    if(locataire)
    {
      this.isAuthentificated = true
      this.userAuthentificated = true
    }
    else
    {
      this.isAuthentificated = false
      this.userAuthentificated = undefined

    }
  }

  //Proprietaire
  public connexionProprietaire(email:string, pwd:string)
  {
    let proprietaire;
    this.proprietaires.forEach(u => {
      if(u.email == email && u.pwd == pwd)
      {proprietaire = u}
      
    });
    if(proprietaire)
    {
      this.isAuthentificated = true
      this.userAuthentificated = true
    }
    else
    {
      this.isAuthentificated = false
      this.userAuthentificated = undefined

    }
  }
 

}
