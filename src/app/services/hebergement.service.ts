import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HebergementService {
  URL = "http://localhost:8088/categories"
  host = "http://localhost:8088/propreties"


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
