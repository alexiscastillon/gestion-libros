const prisma = require('../prisma/prismaClient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const crearUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hashedPassword }
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario' });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los usuarios' });
  }
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.usuario.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el usuario' });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const payload = {
      user: {
        id: usuario.id,
        email: usuario.email
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  loginUsuario
};
