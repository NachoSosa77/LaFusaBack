const productoModel = require("../Models/productoModel");

module.exports = {
  getAll: async (req, res, next) => {
    let queryFind = {};
    if (req.query.buscar) {
      queryFind = {
        nombre: { $regex: ".*" + req.query.buscar + ".*", $options: "i" },
      };
    }
    const productos = await productoModel.find(queryFind);
    res.json(productos);
  },
  getById: async (req, res, next) =>{
    const producto = await productoModel.findById(req.params.id)
    res.json(producto);

  },
  create:async(req, res, next) => {
      const producto = productoModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        precio_oferta: req.body.precio_oferta,
        cantidad: req.body.cantidad,
        img: req.body.img
      })
     const documento = await producto.save();
     res.json(documento); 
  }
};
