const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use((req, _res, next) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true,
})
  .then(() => {
    console.log('MongoDB conectado');
  })
  .catch((err) => {
    console.log(`MongoDB deu merda na connect ${err}`);
  });

const postSchema = mongoose.Schema({
  title: { type: String },
  sinopse: { type: String },
  content: [{ htmlJson: [{ text: { type: String } }] }],
  number: { type: Number },
});

postSchema
  .index({ title: 'text', sinopse: 'text', 'content.htmlJson.text': 'text' })

mongoose.model('index4', postSchema);

const newPost = mongoose.model('index4');

app.get('/', async (_req, res) => {
  const newPostReturn = await newPost
    .find({ $text: { $search: 'ola' } }).catch((err) => console.log(`erro newPost ${err}`));
  res.json(newPostReturn);
});

app.use((err, _req, res, _next) => {
  console.error({ err });
  res.status(500).json({ erro: 'erro interno' });
});

app.listen(PORT, () => console.log('running port', PORT));
