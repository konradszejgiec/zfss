const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  pracownik: {
    type: String,
    required: [true, "Please fill the user name."],
    unique: true,
    bufferCommands: false,
    autoCreate: false,
  },
  nrprac: {
    type: String,
    required: [true, "Please fill the id."],
    unique: true,
    bufferCommands: false,
    autoCreate: false,
  },
  imie: {
    type: String,
    required: [true, "Please fill the firts name."],
    bufferCommands: false,
    autoCreate: false,
  },
  nazwisko: {
    type: String,
    required: [true, "Please fill the second name."],
    bufferCommands: false,
    autoCreate: false,
  },
  jednorg: {
    type: String,
    required: [true, "Please fill the ornagization unit."],
    bufferCommands: false,
    autoCreate: false,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
