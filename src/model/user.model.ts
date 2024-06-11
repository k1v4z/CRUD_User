import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";

interface UserAttributes {
    id: number,
    email: String,
    name: String,
    city: String
}

class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    email!: String;
    name!: String;
    city!: String;
}

User.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'Users', sequelize })

export default User;