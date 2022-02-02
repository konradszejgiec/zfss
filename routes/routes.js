"use strict";

const routes = (app, bodyParser, controller) => {
  const jsonParser = bodyParser.json({ limit: "50mb" });

  //main page

  app.route("/").get(controller.displayMainPage);

  //news

  app.route("/news").get(controller.displayNews);

  app.route("/news.json").get(controller.getNews);

  app.route("/news/:id").get(controller.getSingleNews);

  // employee section

  app.route("/sekcja-pracownik").get(controller.displayEmployeeSection);

  // employee section - application

  app.route("/wniosek").get(controller.displayAddApplication);

  app.route("/wniosek/:pracownik").get(controller.getPersonData);

  // employee section - rules

  app.route("/regulamin-zasady-wnioski/").get(controller.displayAccessPage);

  app.route("/regulamin-zasady-wnioski/:pracownik").get(controller.displayRules);

  // employee section - faq

  app.route("/faq").get(controller.displayAccessPage);

  app.route("/faq/:pracownik").get(controller.displayFaq);

  // employee section - rodo

  app.route("/rodo").get(controller.displayRodo);

  //contact

  app.route("/kontakt").get(controller.displayContact);

  // admin ponel

  app.route("/dodaj").get(controller.displayAddPage);

  // admin panel - add news

  app.route("/dodaj/news").get(controller.displayAccessPostPage);

  app.route("/dodaj/news/:admin").get(controller.displayPostPage).post(jsonParser, controller.postNews);

  // admin panel - delete and update news

  app.route("/managment/news").get(controller.displayAccessPostPage);

  app.route("/managment/news/:admin").get(controller.displayPostPage);

  app.route("/managment/news/delete").delete(jsonParser, controller.deleteNews);

  app.route("/managment/news/update").patch(jsonParser, controller.updateNews);

  // admin panel - database

  app.route("/dodaj/baza").get(controller.displayAccessPostPage);

  app.route("/dodaj/baza/:admin").get(controller.displayPostPage).post(jsonParser, controller.postDatabase);

  // admin panel - success message

  app.route("/dodaj/success").get(controller.displaySuccessMsg);
};

module.exports = routes;
