require('dotenv').config();
require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const {
  PORT,
  MONGODB_URL,
  SOCKET_URL_ORIGIN,
// eslint-disable-next-line import/order
} = require('./config');

const app = express();

const http = require('http').createServer(app);

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB conectado');
  })
  .catch((err) => {
    console.log(`MongoDB deu merda na connect ${err}`);
  });

app.use(cors());

app.use(bodyParser.json());

app.use(require('@utils/log.js'));

app.use((err, _req, res, _next) => {
  console.error({ err });
  res.status(500).json({ erro: 'erro interno' });
});

const io = require('socket.io')(http, {
  cors: {
    origin: SOCKET_URL_ORIGIN, // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

io.on('connection', (socket) => {
  console.log('Conectado');

  socket.on('disconnect', () => {
    console.log('Desconectado');
  });

  socket.on('mensagem', (msg) => {
    console.log(`Mensagem ${msg}`);
    io.emit('ola', msg);
  });
});

http.listen(PORT, () => {
  console.log('Servidor ouvindo na porta ', PORT);
});
