const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { hash } = require("../utils/hash");

const Authorschema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  dob: Date,
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    set(value) {
      this.setDataValue("password", hash(value));
    }
  }
});

const Author = model("Author", Authorschema);
module.exports = Author;
