import { Sequelize } from "sequelize";

//because this project is small, i don't use .env
const DB_NAME: string = "test";
const DB_USER: string = "root";
const DB_PASSWORD: string = "root";

const sequelize: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    define: {
        timestamps: false
    }
});

export default sequelize;