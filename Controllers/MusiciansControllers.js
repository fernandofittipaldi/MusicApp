import { Musician, Role } from "../Models/index.js";

class MusicianControllers{
  constructor(){}

  getAllMusicians = async(req, res) => {
    try{
      const data = await Musician.findAll({
        attributes: ['name', 'lastName', 'email'],
        include: [{
          model: Role,
          attributes: ['name'],
        }],
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

  getMusicianById = async(req, res) => {

  }

  createMusician = async(req, res) => {
    try {
      const { name, lastName, email, city, experience, password, roleId } = req.body;
      const data = await Musician.create({
        name, 
        lastName, 
        email, 
        city, 
        experience,
        password,
        roleId
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

}

export default MusicianControllers;