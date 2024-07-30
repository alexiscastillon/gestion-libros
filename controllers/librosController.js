const prisma = require('../prisma/prismaClient');

const crearLibro = async (req, res) => {
  const { titulo, autorId, usuarioId } = req.body;

  try {
    const libro = await prisma.libro.create({
      data: { titulo, autorId, usuarioId }
    });
    res.status(201).json(libro);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el libro' });
  }
};

const obtenerLibros = async (req, res) => {
  try {
    const libros = await prisma.libro.findMany();
    res.status(200).json(libros);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los libros' });
  }
};

const eliminarLibro = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.libro.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el libro' });
  }
};

module.exports = {
  crearLibro,
  obtenerLibros,
  eliminarLibro
};
