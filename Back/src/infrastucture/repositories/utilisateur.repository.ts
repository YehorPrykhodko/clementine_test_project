import { UtilisateurEntity } from "../../core/entities/uilisateur.entity.js";
import { UtilisateurModel } from "../models/utilisateur.model.js";
import { UtilisateurPersistedEntity } from "../PersistedEntities/utilisateur.persisted-entity.js";

class UtilisateurRepository {

    async create(utilisateur: UtilisateurEntity): Promise<UtilisateurPersistedEntity>{

        const created = (await UtilisateurModel.create({
            id: utilisateur.id,
            nom_utilisateur: utilisateur.nom_utilisateur,
            email: utilisateur.email,
            mot_de_passe: utilisateur.mot_de_passe
        })).get({ plain: true });

        return new UtilisateurPersistedEntity(
            created.id, 
            created.nom_utilisateur,
            created.email,
            created.mot_de_passe,
            created.date_creation
        ) ;
    }
}

export const utilisateurRepository = new UtilisateurRepository();