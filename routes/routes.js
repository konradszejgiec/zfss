"use strict";

const routes = (app, bodyParser, controller) => {
  const jsonParser = bodyParser.json({ limit: "50mb" });

  app.route("/").get(controller.displayMainPage);

  app.route("/wniosek").get(controller.displayAddApplication);

  app.route("/wniosek/:pracownik").get(controller.getPersonData);

  app.route("/regulamin-zasady-wnioski/").get(controller.displayAccessPage);

  app.route("/regulamin-zasady-wnioski/:pracownik").get(controller.displayRules);

  app.route("/faq").get(controller.displayAccessPage);

  app.route("/faq/:pracownik").get(controller.displayFaq);

  app.route("/rodo").get(controller.displayRodo);

  app.route("/kontakt").get(controller.displayContact);

  app.route("/dodaj").get(controller.displayAddPage);

  app.route("/dodaj/baza").get(controller.displayAccessPostPage);

  app.route("/dodaj/news").get(controller.displayAccessPostPage);

  app.route("/dodaj/baza/:admin").get(controller.displayPostPage).post(jsonParser, controller.postDatabase);

  app.route("/dodaj/news/:admin").get(controller.displayPostPage).post(jsonParser, controller.postNews);

  app.route("/dodaj/success").get(controller.displaySuccessMsg);

  app.route("/news").get(controller.displayNews);

  app.route("/news.json").get(controller.getNews);

  app.route("/news/:id").get(controller.getSingleNews);
};

module.exports = routes;
