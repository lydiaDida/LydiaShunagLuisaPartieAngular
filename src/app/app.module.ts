import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './accueil/home.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProposComponent } from './propos/propos.component';
import { InscreptionComponent } from './inscreption/inscreption.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HebergementComponent,
    ConnexionComponent,
    MenuComponent,
    ProposComponent,
    InscreptionComponent,
    
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
