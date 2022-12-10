import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hebergement } from '../hebergement';


@Injectable({
  providedIn: 'root'
})
export class HebergementService {
  //Service web coté backEnd 
  host ="http://localhost:8080/api/v1/hebergement/list"
  hostDelete = "http://localhost:8080/api/v1/hebergement/delete/{id}"
  baseUrl =  "http://localhost:8080/api/v1/hebergement"
  baseUrlCriteria = "http://localhost:8080/api/v1/hebergement/critere"

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

  getHebergement(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }



 // get list hebergement par critere
 // attention: params may be HttpParams,JSON,string
 getHebergementParCritere(critere: HttpParams):Observable<Hebergement[]>{
console.log("in service ====>" + critere.toString());
 return this.http.get<Hebergement[]>(this.baseUrlCriteria, {params:critere});
}





    //Modifier un hebergement
      //Ajouter hebergement
}
//export class PartnerService {
  //private baseUrl = 'http://localhost:8080/api/';

  //constructor(private http:HttpClient) { }

 // createPartner(partner: object): Observable<object> {
  //  return this.http.post(`${this.baseUrl}`, partner);
 // }

  //getPartnerList(): Observable<any> {
   // return this.http.get(`${this.baseUrl}`+'partner-list');
  //}

  //deletePartner(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/partner-delete/${id}`, { responseType: 'text' });
  //}
//}
