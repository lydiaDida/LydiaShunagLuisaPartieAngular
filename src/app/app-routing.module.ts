import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HebergementComponent } from './hebergement/hebergement.component';
import { HomeComponent } from './accueil/home.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProposComponent } from './propos/propos.component';
import { InscreptionComponent } from './inscreption/inscreption.component';



//Definir les routes 
const routes: Routes = [
{path:'', component:HomeComponent},
{path:'propos', component: ProposComponent},
{path:'connexion', component:ConnexionComponent},
{path:'menu', component:MenuComponent},
{path:'hebergement', component:HebergementComponent},
{path:'inscreption', component:InscreptionComponent},
{path:'',redirectTo:'' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
