import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Instrument extends Model {}

Instrument.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: connection,
    modelName: "Instrument",
  }
);

export default Instrument;
