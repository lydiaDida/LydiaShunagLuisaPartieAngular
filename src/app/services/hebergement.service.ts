import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HebergementService {
  URL = "http://localhost:8088/typeDeHebergements"
  host ="http://localhost:8088/hebergements"


  constructor(private http : HttpClient) { }
 
  //getCategories
  public getCategories()
  {
    return this.http.get(this.URL)
  }
  //getRessources()
  public getHebergements()
  {
    return this.http.get(this.host)
  }
 
}
