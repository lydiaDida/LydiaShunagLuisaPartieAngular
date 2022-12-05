import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  //Pour tester 
  //Apres ces donnees on doit les recuperer de la bd ou on stocke les utilisateurs
  private proprietaires = [
    {
      nom:'proprietaire',
      pwd:'1234',
    
    },
    {
      nom:'user',
      pwd:'1234',
     
    }
  ]
  private admins = [
    {
      nom:'admin',
      pwd:'1234',
    
    },
    {
      nom:'ADMIN',
      pwd:'1234',
     
    }
  ]
  private locataires = [
    {
      nom:'alain@gmail.com',
      pwd:'1234',
    
    },
    {
      nom:'LOCATAIRE',
      pwd:'1234',
     
    }
  ]
  public isAuthentificated:any;
  public userAuthentificated:any;

  constructor() { }

  //Admin
  public connexionAdmin(nom:string, pwd:string)
  {
    let admin;
    this.admins.forEach(a => {
      if(a.nom == nom && a.pwd == pwd)
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
  public connexionLocataire(nom:string, pwd:string)
  {
    let locataire;
    this.locataires.forEach(l => {
      if(l.nom == nom && l.pwd == pwd)
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
  public connexionProprietaire(nom:string, pwd:string)
  {
    let proprietaire;
    this.proprietaires.forEach(u => {
      if(u.nom == nom && u.pwd == pwd)
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
 // public isAdmin()
//{
 // if(this.isAuthentificated)
 /// {
   // return true;
  //}
 // return false;
//}

}
