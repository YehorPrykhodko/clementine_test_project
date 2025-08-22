import { DataTypes, Model } from "sequelize";
import { UtilisateurCreationModelInterface, UtilisateurModelInterface } from "../interfaces/models/utilisateur.model.interface.js";
import { sequelize } from "../config/database.js";

export class UtilisateurModel extends Model<UtilisateurModelInterface, UtilisateurCreationModelInterface> implements UtilisateurModelInterface{
    public id!: string;
    public nom_utilisateur!: string;
    public email!: string;
    public mot_de_passe!: string;
    public date_creation!: Date;
}

UtilisateurModel.init(
    {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
        },
        nom_utilisateur: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        mot_de_passe: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        date_creation: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        tableName: "utilisateurs",
        timestamps: false,
    }
)
