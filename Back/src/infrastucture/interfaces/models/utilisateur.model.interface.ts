import { Optional } from "sequelize";

export interface UtilisateurModelInterface{
    id: string;
    nom_utilisateur: string;
    email: string;
    mot_de_passe: string;
    date_creation: Date;
}

export interface UtilisateurCreationModelInterface extends Optional<UtilisateurModelInterface, "date_creation"> {}
