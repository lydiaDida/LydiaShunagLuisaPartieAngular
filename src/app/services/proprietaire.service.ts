import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietaire } from '../models/proprietaire';
import { ProprietaireRetour } from '../models/proprietaire-retour';

@Injectable({
  providedIn: 'root'
})

export class ProprietaireService {
  //Service web coté backEnd qui retourne la liste de tous les hebergements
  hostListProprietaire ="http://localhost:8080/api/v1/proprietaire/list"
  hostDelete = "http://localhost:8080/api/v1/proprietaire/delete/{id}"

   baseUrl =  "http://localhost:8080/api/v1/proprietaire"


  constructor(private http : HttpClient) { }
 
  //getListProprietaire
  public getListProprietaire()
  {
    return this.http.get(this.hostListProprietaire )
  }

  //Supprimer un proprietaire
  public  deleteHebergements(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${{email}}`, { responseType: 'text' });
  }

  //Supprimer un proprietaire
  public deleteProprietaire(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${email}`, { responseType: 'text' });
  }
  //Inscrire un proprietaire
   // inscrireProprietaire(proprietaire: object): Observable<object> {
    //return this.http.post(`${this.baseUrl}/add/${proprietaire}`,{ responseType: 'text' });
  //}
 public inscrireProprietaire(proprietaire: Proprietaire) : Observable<ProprietaireRetour>  {
  return this.http.post<Proprietaire>("http://localhost:8080/api/v1/proprietaire/add",proprietaire);
    //Vider les champs apres l'enregistrement
  
 }

//Supprimer un proprietaire
//public  inscrireProprietaire(proprietaire: object): Observable<object> {
  //return this.http.post(`${this.baseUrl}/add`, proprietaire);
//}
  updateProprietaire(proprietaire: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update`, proprietaire);
  }

    
}
