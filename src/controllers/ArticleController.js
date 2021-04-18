const { Router } = require('express');

const articleRouter = Router();

const { Article } = require('@models');

articleRouter.get('/', async (_req, res) => {
  try {
    const newPostReturn = await Article
      .find({ $text: { $search: 'ola' } });

    res.json(newPostReturn);
  } catch (err) {
    console.log(`erro Article ${err}`);
  }
});

module.exports = articleRouter;
