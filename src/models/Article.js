const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: { type: String },
  sinopse: { type: String },
  content: [{ htmlJson: [{ text: { type: String } }] }],
  number: { type: Number },
});

articleSchema
  .index({ title: 'text', sinopse: 'text', 'content.htmlJson.text': 'text' });

module.exports = mongoose.model('Articles', articleSchema);
