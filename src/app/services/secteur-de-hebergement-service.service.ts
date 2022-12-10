import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecteurDeHebergment } from '../models/secteur-de-hebergment';

@Injectable({
  providedIn: 'root'
})
export class SecteurDeHebergementServiceService {
 // url localise api service de back-end 
 host = "http://localhost:8080";
 baseUrl = "api/v1/secteur-de-hebergement";
 extendUrl = "list";

  constructor(private http: HttpClient) { }

  // get all secteur de hebergement
  public getAllSecteurDeHebergement(): Observable<SecteurDeHebergment[]>{
    return this.http.get<SecteurDeHebergment[]>(`${this.host}/${this.baseUrl}/${this.extendUrl}`);
  }
}
