export class UtilisateurEntity{
    constructor(
        public id: string,
        public nom_utilisateur: string,
        public email: string,
        public mot_de_passe: string,
    ){}
}