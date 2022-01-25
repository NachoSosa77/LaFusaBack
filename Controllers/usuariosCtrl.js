const usuariosModel = require("../Models/usuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

  create: async function (req, res, next) {
    try {
      console.log(req.body);
      const usuario = new usuariosModel({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      const document = await usuario.save();
      res.json(document);
    } catch (e) {
      next(e);
    }
  },

  login: async function (req, res, next) {
    try {
      const user = await usuariosModel.findOne({ email: req.body.email });
      if (!user) {
        res.json({error:true,message:"Email incorrecto" })
        return;
      }
      if (bcrypt.compareSync(req.body.password,user.password)) {
        const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
        res.json({error:false,message:"Login Correcto",token:token })
        return;
      }else{
        res.json({ error:false,message:"Contraseña Incorrecta" })
        return;
      }
    } catch {e}{
      next(e);
    }
  },
};
