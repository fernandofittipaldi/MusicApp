import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class Musician extends Model {

  validatePassword = async (password) => {
    const validate = await bcrypt.compare(password, this.password);
    return validate;
  }; 
}

Musician.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    },
    instrumentId: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    salt: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize: connection,
    modelName: "musician",
  }
);

Musician.beforeCreate( async(musician) => {
  const salt = await bcrypt.genSalt();
  musician.salt = salt;
  const passHass = await bcrypt.hash(musician.password, salt)
  musician.password = passHass;
});

export default Musician;
