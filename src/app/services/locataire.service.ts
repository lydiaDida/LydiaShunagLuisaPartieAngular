import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locataire } from '../models/locataire';

import { LocataireRetour } from '../models/locataire-retour';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class LocataireService  {
  //Service web coté backEnd qui retourne la liste des reservations de locataire
  host ="http://localhost:8080/api/v1/reservation/list"
  baseUrl = "http://localhost:8080/api/v1/reservation"
  hostLocataire = "localhost:8080/api/v1/locataire/list"
  baseUrlLocataire =  "http://localhost:8080/api/v1/locataire"

  constructor(private http : HttpClient) { }
  //getReservation
  public getLocataireList()
  {
    return this.http.get(this.hostLocataire)
  }
  //getReservation
  public getReservations()
  {
    return this.http.get(this.host)
  }
  //getReservation d'un locataire
 public getReservationsLocataire(email: string)
  {
    return this.http.get(`${this.baseUrl}/locataire/${email}`);
  }
  //Supprimer une reservation
  public  deleteReservations(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  //Delete locataire
  public deleteLocataire(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrlLocataire}/delete/${email}`, { responseType: 'text' });
  }
    //Ajouter une reservation 
    createReservation(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(`${this.baseUrl}/add`, reservation);
    }

    //Create locataire
    public inscrireLocataire(locataire: Locataire) : Observable<LocataireRetour>  {
      return this.http.post<Locataire>("http://localhost:8080/api/v1/locataire/add",locataire);
        
      
     }
    //public  inscrireLocataire(locataire: Locataire) : Observable<Locataire>  {
      //return this.http.post<Locataire>("http://localhost:8080/api/v1/locataire/add",locataire);
    // }
    
  
  
}