var express = require('express');
var router = express.Router();
const usuarioCrtl = require ('../Controllers/usuariosCtrl')

router.post("/", usuarioCrtl.create);
router.post("/login", usuarioCrtl.login);

module.exports = router;
