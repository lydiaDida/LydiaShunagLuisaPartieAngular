import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hebergement } from '../models/hebergement';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class HebergementService {
  //Service web coté backEnd 
  host ="http://localhost:8080/api/v1/hebergement/list"
  hostDelete = "http://localhost:8080/api/v1/hebergement/delete/{id}"
  baseUrl =  "http://localhost:8080/api/v1/hebergement"
  baseUrlCriteria = "http://localhost:8080/api/v1/hebergement/critere"
  baseUrlReservation = "http://localhost:8080/api/v1/reservation"

  constructor(private http : HttpClient) { }
 
  //getHebergemenents
  public getHebergements()
  {
    return this.http.get(this.host)
  }

  //Supprimer un hebergement
  //public deleteHebergements(id:number)
  //{
   // return this.http.get(this.hostDelete)
  //}
  public  deleteHebergements(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  //Ajouter un hebergement
  createHebergement(hebergement: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/add`, hebergement);
  }

   //Ajouter une reservation
   createReservation(reservation: Reservation): Observable<object> {
    return this.http.post(`${this.baseUrlReservation}/add`,reservation);
  }


  getHebergement(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

 // get list hebergement par critere
 //Un corps de requête/réponse HTTP qui représente des paramètres sérialisés, selon le type
 // attention: params peut etre HttpParams,JSON,string
 getHebergementParCritere(critere: HttpParams):Observable<Hebergement[]>{
console.log("in service ====>" + critere.toString());
 return this.http.get<Hebergement[]>(this.baseUrlCriteria, {params:critere});
}
}

