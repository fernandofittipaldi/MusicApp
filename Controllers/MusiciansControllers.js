import Musician from "../Models/Musician.js";

class MusicianControllers{
  constructor(){}

  getAllMusicians = async(req, res) => {
    try{
      const data = await Musician.findAll();
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

  createMusician = async(req, res) => {
    try {
      const { name, lastName, email, city, experience } = req.body;
      const data = await Musician.create({
        name, 
        lastName, 
        email, 
        city, 
        experience,
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

}

export default MusicianControllers;