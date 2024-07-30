const prisma = require('../prisma/prismaClient');

const crearAutor = async (req, res) => {
  const { nombre } = req.body;

  try {
    const autor = await prisma.autor.create({
      data: { nombre }
    });
    res.status(201).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el autor' });
  }
};

const obtenerAutores = async (req, res) => {
  try {
    const autores = await prisma.autor.findMany();
    res.status(200).json(autores);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los autores' });
  }
};

const eliminarAutor = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.autor.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el autor' });
  }
};

module.exports = {
  crearAutor,
  obtenerAutores,
  eliminarAutor
};
