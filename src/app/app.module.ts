import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ConnexionComponent } from './connexion-locataire/connexion.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HebergementComponent,
    ConnexionComponent,
    MenuComponent,
    ProposComponent,
    InscreptionComponent,
    ConnexionPropComponent,
    InscreptionPropComponent,
    AdminComponent,
    EspaceLocataireComponent,
    EspaceProprietaireComponent,
    ReserverHebergementComponent,
    HeberpementsLocataireComponent,
    ConnexionAdminComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
