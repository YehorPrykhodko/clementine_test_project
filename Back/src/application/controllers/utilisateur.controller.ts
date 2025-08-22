import { CreateUtilisateurDTO } from "../dto/request/create-utilisateur.request.dto.js";
import { utilisateurService } from "../../core/services/utilisateur.service.js";
import { Router } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { UtilisateurResponseDTO } from "../dto/response/utilisateur.response.dto.js";

const router = Router(); 

router.post("/", async (req, res) => {

  const dto = plainToInstance(CreateUtilisateurDTO, req.body as object);

  const errors = await validate(dto);

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  const utilisateur: UtilisateurResponseDTO = await utilisateurService.createUtilisateur(dto);
  res.status(201).json(utilisateur);
});

export default router;