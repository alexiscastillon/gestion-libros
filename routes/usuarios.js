const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.crearUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.delete('/:id', usuariosController.eliminarUsuario);
router.post('/login', usuariosController.loginUsuario);

module.exports = router;

