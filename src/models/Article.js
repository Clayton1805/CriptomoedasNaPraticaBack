const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  criptoName: { type: String },
  articles: [{
    userId: { type: String },
    title: { type: String },
    sinopse: {
      text: { type: String },
      urlImg: { type: String },
    },
    content: [
      {
        contentType: { type: String },
        htmlJsonDraftJs: {
          blocks: [
            {
              text: { type: String },
            },
          ],
        },
      },
    ],
    like: [{ type: String }],
    dislike: [{ type: String }],
  }],
});

articleSchema.index({
  'articles.title': 'text',
  'articles.sinopse.text': 'text',
  'articles.content.htmlJsonDraftJs.blocks.text': 'text',
});

module.exports = mongoose.model('Articles', articleSchema);
