"use strict";

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const Person = require("../models/person");

exports.displayMainPage = async (req, res) => {
  res.render("main", {
    route: "background-image: url('../../assets/img/home-bg.jpg')",
  });
};

exports.displayRules = async (req, res) => {
  try {
    const personData = await Person.findOne({
      pracownik: req.query.fname + req.query.sname + req.query.id[21] + req.query.id[28] + req.query.id[14],
    });
    if (personData) {
      res.render("rules", {
        route: "background-image: url('../../assets/img/rules-bg.jpg')",
        sectionMsg: "Regulamin, zasady, wnioski do pobrania",
      });
    } else
      res.render("access-message", {
        route: "background-image: url('../../assets/img/rules-bg.jpg')",
        sectionMsg: "Regulamin, zasady, wnioski do pobrania",
        link: "/regulamin-zasady-wnioski",
      });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.displayFaq = async (req, res) => {
  try {
    const personData = await Person.findOne({
      pracownik: req.query.fname + req.query.sname + req.query.id[21] + req.query.id[28] + req.query.id[14],
    });
    if (personData) {
      res.render("faq", {
        route: "background-image: url('../../assets/img/faq-bg.jpg')",
        sectionMsg: "Odpowiedzi na najczęściej zadawane pytania",
      });
    } else
      res.render("access-message", {
        route: "background-image: url('../../assets/img/faq-bg.jpg')",
        sectionMsg: "Odpowiedzi na najczęściej zadawane pytania",
        link: "/faq",
      });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.displayAccessPage = async (req, res) => {
  let image, message;
  if (req.path == "/faq") {
    image = "faq";
    message = "Odpowiedzi na najczęściej zadawane pytania";
  }
  if (req.path == "/regulamin-zasady-wnioski") {
    image = "rules";
    message = "Regulamin, zasady, wnioski do pobrania";
  }

  res.render("access", {
    route: `background-image: url('../../assets/img/${image}-bg.jpg')`,
    sectionMsg: message,
    link: req.path,
  });
};

exports.displayAddApplication = async (req, res) => {
  res.render("application", {
    route: "background-image: url('../../assets/img/application-bg.jpg')",
    sectionMsg: "Wniosek o dofinansowanie",
  });
};

exports.displayRodo = async (req, res) => {
  res.render("rodo", {
    route: "background-image: url('../../assets/img/privacy-policy-bg.jpg')",
    sectionMsg: "Klauzula RODO",
  });
};

exports.displayContact = async (req, res) => {
  res.render("contact", {
    route: "background-image: url('../../assets/img/contact-bg.jpg')",
    sectionMsg: "Kontakt",
  });
};

exports.displayAccessPostPage = async (req, res) => {
  res.render("access-post-data", {
    route: "background-image: url('../../assets/img/password-bg.jpg')",
    sectionMsg: "Panel administratora",
    link: req.path,
  });
};

exports.displayPostPage = async (req, res) => {
  try {
    if (req.query.password == process.env.FORM_PASSWORD) {
      res.render("post-data", {
        route: "background-image: url('../../assets/img/password-success-bg.jpg')",
        sectionMsg: "Panel administratora",
      });
    } else
      res.render("access-message", {
        route: "background-image: url('../../assets/img/password-bg.jpg')",
        sectionMsg: "Panel administratora",
        link: "/post-data",
      });
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
