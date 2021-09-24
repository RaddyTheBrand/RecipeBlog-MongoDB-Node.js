const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This fild is required.'
  },
  description: {
    type: String,
    required: 'This fild is required.'
  },
  email: {
    type: String,
    required: 'This fild is required.'
  },
  ingredients: {
    type: Array,
    required: 'This fild is required.'
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
    required: 'This fild is required.'
  },
  image: {
    type: String,
    required: 'This fild is required.'
  },
});

recipeSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);