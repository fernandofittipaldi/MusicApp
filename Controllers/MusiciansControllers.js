import { Musician, Role } from "../Models/index.js";
import { generateToken, decodeToken } from "../utils/token.js";

class MusicianControllers{
  constructor(){}

  getAllMusicians = async(req, res) => {
    try{
      const data = await Musician.findAll({
        attributes: ['name', 'lastName', 'email', 'city', 'experience'],
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
    try {
      const { id } = req.params;
      const data = await Musician.findOne({
        where: {
          id,
        },
        attributes: ['name', 'lastName', 'email'],
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }

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

  updateMusician = async(req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const { name, lastName, email, city, experience, password, roleId } = req.body;
      console.log(name);
      console.log(lastName);
      const data = await Musician.update({
        name, 
        lastName, 
        email, 
        city, 
        experience,
        password,
        roleId
      }, 
      {
        where: {
          id,
        },
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

  deleteMusician = async(req, res) => {
    try {
      const { id } = req.params;
      const data = await Musician.destroy( 
      {
        where: {
          id,
        },
      });
      res.status(200).send({ success: true, message: data});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

  loginMusician = async(req, res) => {
    try {
      const { email, password } = req.body;
      const data = await Musician.findOne( 
      {
        where: {
          email,
        },
      });
      if (!data) throw new Error('Invalid User');
      const validate = await data.validatePassword(password);
      if (!validate) throw new Error('Invalid Password');

      const payload = {
        id: data.id,
        name: data.name,
      };

      const token = generateToken(payload);
      res.cookie('token', token);

      res.status(200).send({ success: true, message: "Login OK", token});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message});
    }
  };

  // me = async (req, res) => {
  //   try {
  //     const { user } =req;
  //     if (!user) throw new Error ('Invalid login');
  //     res.status(200).send({ success: true, message: { user }});
  //   } catch (error) {
  //     res.status(500).send({ success: false, message: error.message});
  //   }
  // }
  me = async (req, res) => {
    try {
      const { id } = req.user;
      const user = await Musician.findByPk(id);
  
      if (!user) throw new Error('Invalid login');
  
      res.status(200).send({ success: true, message: { user } });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  

}

export default MusicianControllers;