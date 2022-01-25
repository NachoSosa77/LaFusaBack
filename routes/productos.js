var express = require('express');
var router = express.Router();
const productoCrtl = require ('../Controllers/productosCtrl')

//router.get('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productoCrtl.getAll);
router.get('/', productoCrtl.getAll);
router.get('/:id', productoCrtl.getById);
router.post('/', productoCrtl.create);

module.exports = router;