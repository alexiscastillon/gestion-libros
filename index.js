const express = require('express');
const app = express();
const dotenv = require('dotenv');
const prisma = require('./prisma/prismaClient');

dotenv.config();

app.use(express.json());

// Rutas
app.use('/usuarios', require('./routes/usuarios'));
app.use('/libros', require('./routes/libros'));
app.use('/autores', require('./routes/autores'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
