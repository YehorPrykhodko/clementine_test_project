import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUtilisateurDTO {
  @IsNotEmpty({ message: "Le nom d'utilisateur est obligatoire" })
  @MinLength(2, { message: "Le nom d'utilisateur doit contenir au moins 2 caractères" })
  nom_utilisateur!: string;

  @IsEmail({}, { message: "Email invalide" })
  email!: string;

  @IsNotEmpty({ message: "Le mot de passe est obligatoire" })
  @MinLength(2, { message: "Le mot de passe doit contenir au moins 2 caractères" })
  mot_de_passe!: string;
}
