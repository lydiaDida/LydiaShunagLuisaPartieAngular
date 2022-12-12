import { Component, OnInit } from '@angular/core';
import { HebergementService } from '../services/hebergement.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: HebergementService) { }
  hebergements:any;
  deleteMessage:boolean =false;
  ngOnInit(): void {
    this.getHebergement();
  }
  private getHebergement()
  {
    this.service.getHebergements().subscribe(data=>this.hebergements = data)
  }

  public deleteHebergement(id: number) {
    this.service.deleteHebergements(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.service.getHebergements().subscribe(data =>{
            this.hebergements =data
            })
        },
        error => console.log(error));
  }
}
