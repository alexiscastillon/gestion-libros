const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.post('/', librosController.crearLibro);
router.get('/', librosController.obtenerLibros);
router.delete('/:id', librosController.eliminarLibro);

module.exports = router;
