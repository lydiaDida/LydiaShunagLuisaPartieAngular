import { Component, OnInit } from '@angular/core';
import { HebergementService } from '../services/hebergement.service';

@Component({
  selector: 'app-list-hebergement',
  templateUrl: './list-hebergement.component.html',
  styleUrls: ['./list-hebergement.component.css']
})
export class ListHebergementComponent implements OnInit {

  constructor(private hebergementService: HebergementService) { }
  hebergements: any;
  deleteMessage=false;
  ngOnInit(): void {
    this.getHebergement();
    this.deleteHebergement;
  }

  private getHebergement()
  {
    this.hebergementService.getHebergements().subscribe(data=>this.hebergements = data)
  }
  public deleteHebergement(id: number) {
    this.hebergementService.deleteHebergements(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.hebergementService.getHebergements().subscribe(data =>{
            this.hebergements =data
            })
        },
        error => console.log(error));
  }

}
