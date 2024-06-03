import Instrument from "./Instrument.js";
import Musician from "./Musician.js";
import Role from "./Role.js";

Role.hasMany(Musician, {
  foreignKey: 'roleId',
});
Musician.belongsTo(Role, {
  foreignKey: 'roleId',
});

Instrument.hasMany(Musician, {
  foreignKey: 'instrumentId',
});
Musician.belongsTo(Instrument, {
  foreignKey: 'instrumentId',
});

export { Instrument, Musician, Role};