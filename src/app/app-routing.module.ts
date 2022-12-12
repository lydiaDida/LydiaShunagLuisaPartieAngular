import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { ListLocataireComponent } from './list-locataire/list-locataire.component';
import { ListProprietaireComponent } from './list-proprietaire/list-proprietaire.component';
import { ListHebergementComponent } from './list-hebergement/list-hebergement.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';



//Definir les routes 
const routes: Routes = [
{path:'', component:HomeComponent},
{path:'propos', component: ProposComponent},

{path:'criteria', component: CriteriaComponent},
{path:'loginAdmin', component: LoginAdminComponent},
{path:'connexion', component:ConnexionComponent},
{path:'listLocataire', component:ListLocataireComponent},
{path:'listProprietaire', component:ListProprietaireComponent},
{path:'listHebergement', component:ListHebergementComponent},
{path:'connexionProp', component:ConnexionPropComponent},
{path:'espaceAdmin', component:AdminComponent},
{path:'hebergementsLoc', component: HeberpementsLocataireComponent},
{path:'admin', component:AdminComponent},
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
