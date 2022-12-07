import { Adresse } from "./adresse";

export interface Proprietaire {

    motDePasse: string,
    nom:string,
    prenom:string,
    telephone:string,
    etatDeProprietaire:boolean,
    adresse: Adresse,
}
