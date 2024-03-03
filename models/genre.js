const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  //Campo para describir el género
   name:{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
   }
});

//Declaración de virtual para la URL del género

GenreSchema.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);