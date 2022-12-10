import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeDeHebergement } from '../models/type-de-hebergement';

@Injectable({
  providedIn: 'root'
})
export class TypeDeHebergementServiceService {
  // url localise api servcie de back-end  
  host = "http://localhost:8080";
  baseUrl = "api/v1/type-de-hebergement";
  extendUrl = "list";

  constructor(private http: HttpClient) { }

  // get all type de hebergement
  public getAllTypeDeHebergement(): Observable<TypeDeHebergement[]>{
    return this.http.get<TypeDeHebergement[]>(`${this.host}/${this.baseUrl}/${this.extendUrl}`);
  }

}
