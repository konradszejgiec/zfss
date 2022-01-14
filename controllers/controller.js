"use strict";

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const Person = require("../models/person");

exports.displayMainPage = async (req, res) => {
  res.render("main");
};

exports.displayRules = async (req, res) => {
  res.render("regulamin-zasady-wnioski");
};

exports.displayAddApplication = async (req, res) => {
  res.render("wniosek");
};

exports.displayRodo = async (req, res) => {
  res.render("rodo");
};

exports.displayCalcMethod = async (req, res) => {
  res.render("obliczanie-dochodu");
};

exports.displayFaqPage = async (req, res) => {
  res.render("faq");
};

exports.displayContact = async (req, res) => {
  res.render("kontakt");
};

exports.displayPostPage = async (req, res) => {
  res.render("post-data");
};

exports.getPersonData = async (req, res) => {
  try {
    const personData = await Person.findOne({ pracownik: req.params.pracownik });
    res.status(200).send(personData);
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.postDatabase = async (req, res) => {
  try {
    if (req.body.password != process.env.FORM_PASSWORD) res.status(403).send("Sorry, bad password");
    else {
      const person = await Person.insertMany(req.body.content);
      res.status(200).end();
    }
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};
