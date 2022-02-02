"use strict";

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const Person = require("../models/person");

const News = require("../models/news");

exports.displayMainPage = async (req, res) => {
  res.render("main", {
    route: "background-image: url('../../assets/img/home-bg.jpg')",
  });
};

exports.displayEmployeeSection = async (req, res) => {
  res.render("employee-section", {
    route: "background-image: url('../../assets/img/employee-section-bg.jpg')",
    sectionMsg: "Sekcja dla pracowników",
  });
};

exports.displayNews = async (req, res) => {
  res.render("news", {
    route: "background-image: url('../../assets/img/news-bg.jpg')",
    sectionMsg: "Aktualności",
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

exports.displayAddPage = async (req, res) => {
  res.render("add", {
    route: "background-image: url('../../assets/img/admin-bg.jpg')",
    sectionMsg: "Panel administratora",
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
      if (req.path == "/dodaj/news/access") {
        res.render("add-news", {
          route: "background-image: url('../../assets/img/password-success-bg.jpg')",
          sectionMsg: "Panel administratora",
        });
      } else if (req.path == "/dodaj/baza/access") {
        res.render("post-data", {
          route: "background-image: url('../../assets/img/password-success-bg.jpg')",
          sectionMsg: "Panel administratora",
          link: "/dodaj/success",
        });
      } else if (req.path == "/managment/news/access") {
        res.render("news-managment", {
          route: "background-image: url('../../assets/img/password-success-bg.jpg')",
          sectionMsg: "Panel administratora",
        });
      }
    } else
      res.render("access-message", {
        route: "background-image: url('../../assets/img/password-bg.jpg')",
        sectionMsg: "Panel administratora",
        link: "/dodaj",
      });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.displaySuccessMsg = async (req, res) => {
  res.render("success", {
    route: "background-image: url('../../assets/img/password-success-bg.jpg')",
    sectionMsg: "Panel administratora",
    link: "/",
  });
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

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).send(news);
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.postNews = async (req, res) => {
  try {
    const news = await News.create(req.body.content);
    res.status(200).end();
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.render("single-news", {
      id: news._id,
      title: news.title,
      date: news.date.toLocaleString("pl-PL", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      link: "/news",
    });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.body.id);
    res.status(200).end();
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

exports.updateNews = async (req, res) => {
  try {
    await News.findByIdAndUpdate(
      req.body.id,
      { content: req.body.item },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).end();
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};
