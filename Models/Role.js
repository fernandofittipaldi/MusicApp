import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class Role extends Model{};

Role.init({
  name: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    allowNull: false,
   },
},{
  sequelize: connection,
  modelName: "Role",

});


export default Role;
