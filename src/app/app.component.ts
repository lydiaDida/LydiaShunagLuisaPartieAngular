import { Component, OnInit } from '@angular/core';
import { HebergementService } from './services/hebergement.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  categories :any;
  nom:string="Lydia";
  
    constructor( private service: HebergementService) { 
      
    }
  
    ngOnInit(): void {
      this.service.getCategories().subscribe(data=>this.categories = data)
    }

   
  title = 'projet-synthese-angular';
}

