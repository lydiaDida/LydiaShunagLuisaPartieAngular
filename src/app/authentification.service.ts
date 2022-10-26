import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  //Pour tester 
  //Apres ces donnees on doit les recuperer de la bd ou on stocke les utilisateurs
  private utilisateurs = [
    {
      nom:'admin',
      pwd:'1234',
      role:['ADMIN','USER']
    },
    {
      nom:'user',
      pwd:'1234',
      role:['USER']
    }
  ]
  public isAuthentificated:any;
  public userAuthentificated:any;

  constructor() { }
  public connexion(nom:string, pwd:string)
  {
    let utilisateur;
    this.utilisateurs.forEach(u => {
      if(u.nom == nom && u.pwd == pwd)
      {utilisateur = u}
      
    });
    if(utilisateur)
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
  public isAdmin()
{
  if(this.isAuthentificated)
  {
    return true;
  }
  return false;
}

}
