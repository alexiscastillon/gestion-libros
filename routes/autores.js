const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autoresController');

router.post('/', autoresController.crearAutor);
router.get('/', autoresController.obtenerAutores);
router.delete('/:id', autoresController.eliminarAutor);

module.exports = router;
