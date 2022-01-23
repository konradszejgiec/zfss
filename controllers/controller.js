"use strict";

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const Person = require("../models/person");

exports.displayMainPage = async (req, res) => {
  res.render("main");
};

exports.displayRules = async (req, res) => {
  console.log(req.query.id[37], req.query.id[38], req.query.id[18]);
  try {
    const personData = await Person.findOne({
      pracownik:
        req.query.fname +
        req.query.sname +
        req.query.id[37] +
        req.query.id[38] +
        req.query.id[18],
    });
    if (personData) {
      res.render("regulamin-zasady-wnioski");
    } else res.render("access-message", { link: "/regulamin-zasady-wnioski" });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.displayFaq = async (req, res) => {
  try {
    const personData = await Person.findOne({
      pracownik:
        req.query.fname +
        req.query.sname +
        req.query.id[37] +
        req.query.id[38] +
        req.query.id[18],
    });
    if (personData) {
      res.render("faq");
    } else res.render("access-message", { link: "/faq" });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.getPersonData = async (req, res) => {
  try {
    const personData = await Person.findOne({
      pracownik: req.params.pracownik,
    });
    res.status(200).send(personData);
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.displayAccessPage = async (req, res) => {
  res.render("access", { link: req.path });
};

exports.displayAddApplication = async (req, res) => {
  res.render("wniosek");
};

exports.displayRodo = async (req, res) => {
  res.render("rodo");
};

exports.displayFaqPage = async (req, res) => {
  res.render("faq");
};

exports.displayContact = async (req, res) => {
  res.render("kontakt");
};

exports.displayAccessPostPage = async (req, res) => {
  res.render("access-post-data", { link: req.path });
};

exports.displayPostPage = async (req, res) => {
  try {
    if (req.path == `/post-data/${process.env.FORM_PASSWORD}`) {
      res.render("post-data");
    } else res.render("access-message", { link: "/post-data" });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.getPersonData = async (req, res) => {
  try {
    const personData = await Person.findOne({
      pracownik: req.params.pracownik,
    });
    res.status(200).send(personData);
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.postDatabase = async (req, res) => {
  try {
    const person = await Person.insertMany(req.body.content);
    res.status(200).end();
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};
