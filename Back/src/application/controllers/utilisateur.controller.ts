import { validate } from "class-validator";
import { CreateUtilisateurDTO } from "../dto/create-utilisateur.dto.js";
import { plainToInstance } from "class-transformer";
import { utilisateurService } from "../../core/services/utilisateur.service.js";
import { Router } from "express";

const router = Router(); 

router.post("/", async (req, res) => {

  const dto = plainToInstance(CreateUtilisateurDTO, req.body as object);

  const errors = await validate(dto);

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  const utilisateur = await utilisateurService.createUtilisateur(dto);
  console.log(utilisateur)
  res.status(201).json(utilisateur);
});

export default router;