import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocataireService  {
  //Service web coté backEnd qui retourne la liste des reservations de locataire
  host ="http://localhost:8080/api/v1/reservation/list"
  baseUrl = "http://localhost:8080/api/v1/reservation"
  hostLocataire = "localhost:8080/api/v1/locataire/list"

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

    //Ajouter une reservation 
    createReservation(reservation: object): Observable<object> {
      return this.http.post(`${this.baseUrl}/add`, reservation);
    }
  
}