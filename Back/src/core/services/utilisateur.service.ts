import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { CreateUtilisateurDTO } from "../../application/dto/request/create-utilisateur.request.dto.js";
import { utilisateurRepository } from "../../infrastucture/repositories/utilisateur.repository.js";
import { UtilisateurEntity } from "../entities/uilisateur.entity.js";
import { UtilisateurPersistedEntity } from "../../infrastucture/PersistedEntities/utilisateur.persisted-entity.js";
import { UtilisateurResponseDTO } from "../../application/dto/response/utilisateur.response.dto.js";

class UtilisateurService {

  async createUtilisateur(data: CreateUtilisateurDTO) : Promise<UtilisateurResponseDTO> {
    const id = uuidv4();

    const hashedMDP = await bcrypt.hash(data.mot_de_passe, 10);

    const utilisateur: UtilisateurEntity = {
      id,
      nom_utilisateur: data.nom_utilisateur,
      email: data.email,
      mot_de_passe: hashedMDP
    };

    const created: UtilisateurPersistedEntity = await utilisateurRepository.create(utilisateur);

    return {
      id: created.id,
      nom_utilisateur: created.nom_utilisateur,
      email: created.email,
      date_creation: created.date_creation,
    };
  }
}

export const utilisateurService = new UtilisateurService();