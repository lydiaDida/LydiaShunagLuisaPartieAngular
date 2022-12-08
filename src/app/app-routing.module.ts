import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HebergementComponent } from './hebergement/hebergement.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion-locataire/connexion.component';
import { ProposComponent } from './propos/propos.component';
import { InscreptionComponent } from './inscreption-locataire/inscreption.component';
import { ConnexionPropComponent } from './connexion-prop/connexion-prop.component';
import { InscreptionPropComponent } from './inscreption-prop/inscreption-prop.component';
import { AdminComponent } from './espace-admin/admin.component';
import { EspaceLocataireComponent } from './espace-locataire/espace-locataire.component';
import { EspaceProprietaireComponent } from './espace-proprietaire/espace-proprietaire.component';
import { ReserverHebergementComponent } from './reserver-hebergement/reserver-hebergement.component';
import { HeberpementsLocataireComponent } from './heberpements-locataire/heberpements-locataire.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';



//Definir les routes 
const routes: Routes = [
{path:'', component:HomeComponent},
{path:'propos', component: ProposComponent},
{path:'connexion', component:ConnexionComponent},
{path:'connexionProp', component:ConnexionPropComponent},

{path:'menu', component:MenuComponent},
{path:'hebergementsLoc', component: HeberpementsLocataireComponent},
{path:'admin', component:AdminComponent},
{path:'hebergement', component:HebergementComponent},
{path:'inscreption', component:InscreptionComponent},
{path:'espaceLocataire', component:EspaceLocataireComponent},
{path:'espaceProprietaire', component:EspaceProprietaireComponent},
{path:'connexionAdmin', component:ConnexionAdminComponent},
{path:'inscreptionProp', component:InscreptionPropComponent},
{path:'reserver', component: ReserverHebergementComponent},
{path:'',redirectTo:'' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
