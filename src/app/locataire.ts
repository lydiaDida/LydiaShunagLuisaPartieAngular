import { Adresse } from "./adresse"

export interface Locataire {

    emailLocataire: String
    motDePasse: String
    nom: String
    prenom: String
    telephone : String
    etatDeLocataire:Boolean;
    adresse: Adresse;
}
