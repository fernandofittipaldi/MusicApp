import { Role, Instrument } from "../Models/index.js";

const seed = async () => {
  await Instrument.bulkCreate([
    { name: "Guitar" },
    { name: "Bass" },
    { name: "Drum" },
    { name: "Piano" },
    { name: "Sax" },
    { name: "Trumpet" },
  ]);

  await Role.bulkCreate([{ name: "admin" }, { name: "user" }]);
};

export default seed;
